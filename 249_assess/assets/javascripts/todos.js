(function() {
  todos = {
    todo_collection: [],
    collection_by_menu: [],
    top_menu: [],
    bottom_menu: [],
    last_id: 0,
    add: function() {
      this.last_id++;
      var todo = {
        id: this.last_id,
        title: "New Todo #" + this.last_id,
        due_date: "",
        description: "",
        complete: false
      };
      this.todo_collection.push(todo);
      return todo;
    },
    addMenuItem: function(val, flag) {
      var $current = flag === "all" ? $("#every_todos") : $("#completed_todos");
      if(!this.menuAlreadyExists(val, flag)) { 
        if(flag === "all") {
          this.top_menu.push({ val: val, flag: flag });
        }
        else {
          this.bottom_menu.push({ val: val, flag: flag });
        }
        this.saveData();
      }
      if (val === "No Due Date") {
        $current.find("li").eq(0).after("<li data-block=\"" + val + "\"><a href=\"\">" + val + " <p>0</p></a></li>");
      }
      else {
        $current.append("<li data-block=\"" + val + "\"><a href=\"\">" + val + " <p>0</p></a></li>");
      }
    },
    addTodo: function() {
      var todo = this.add(),
          $todo = $(this.template.replace(/ID/g, todo.id));

      $(".list_items").prepend($todo);
      this.changeMenuCount("All Todos", 1, "all");
      this.changeMenuCount("No Due Date", 1, "all");
      this.saveData();
      if(!this.menuAlreadyExists("No Due Date", "all")) { this.addMenuItem("No Due Date", "all") };      
      this.changeMenuItem("No Due Date", "all");
      this.updatePage();
    },
    bindEvents: function() {
      $("aside ul").on("click", "li", $.proxy(this.changeDisplay, this));
      $("h3").on("click", $.proxy(this.addTodo, this));
      $(".list_items").on("click", ".trash", $.proxy(this.deleteTodo, this));
      $(".list_items").on("click", "a", this.openModal);
      $(".list_items").on("click", "#save_info", $.proxy(this.updateTodo, this));
      $(".list_items").on("click", "#mark_complete", $.proxy(this.markComplete, this));
      $(".list_items").on("click", ".modal_layer", this.closeModal);
      $(".list_items").on("change", ":checkbox", $.proxy(this.toggleComplete, this));
    },
    cacheTemplate: function() {
      var $todo_template = $("#todo_item").remove();
      this.template = $todo_template.html();
    },
    changeClass: function(class_name, event_li) {
      event_li.closest("aside").find("." + class_name).removeClass(class_name);
      event_li.addClass(class_name);
    },
    changeDisplay: function(e) {
      e.preventDefault();
      var class_name = "active",
          event_li = $(e.target).closest("li"),
          menu_data = event_li.attr("data-block"),
          first_li_data = event_li.closest("ul").find("li").eq(0).attr("data-block"),
          flag = first_li_data === "All Todos" ? "all" : "";
      this.changeClass(class_name, event_li);
      this.setLocalStorage("jk_active_menu", JSON.stringify({val: menu_data, flag: flag}));
      this.updatePage();
    },
    changeMenuCount: function(key, value, flag) {
      var menu_item = this.getMenuItem(key, flag);

      if (!menu_item) {
        menu_item = { key: key, value: 0, flag: flag }; 
        this.collection_by_menu.push(menu_item);
      }
      menu_item.value += value;
      this.saveData();
    },
    changeMenuItem: function(item, flag) {
      var $current = this.findHeadLi(flag);
      $current.filter("[data-block='" + item +"']").click();
    },
    closeModal: function() {
      $(".modal_layer, .todo_update").filter(":visible").fadeOut(500);
    },
    delete: function(idx) {
      this.todo_collection = this.todo_collection.filter(function(todo) {
        return todo.id !== idx;
      });
    },
    deleteTodo: function(e) {
      var $todo = this.findParent(e),
          id = this.findID($todo),
          todo = this.getTodo(id),
          flag = todo.complete ? "" : "all",
          current_head_key = this.findHeadLi(flag).eq(0).attr("data-block");

      this.removeEmptyMenu($todo);
      this.delete(this.findID($todo));
      $todo.remove();
      this.changeMenuCount(current_head_key, -1, flag);
      this.saveData();
      this.updatePage();
    },
    saveData: function(){
      this.setLocalStorage("jk_last_id", this.last_id);
      this.setLocalStorage("jk_todos_collection", JSON.stringify(this.todo_collection));
      this.setLocalStorage("jk_todo_menu", JSON.stringify(this.collection_by_menu));
      this.setLocalStorage("jk_top_menu", JSON.stringify(this.top_menu));
      this.setLocalStorage("jk_bottom_menu", JSON.stringify(this.bottom_menu)); 
    },
    filterOptions: function() {
      var $active_menu = $("aside ul").find(".active"),
          menu_code = $active_menu.attr("data-block"),
          name_array = $active_menu.find("a").text().replace(/\s+/g, " ").trim().split(" "), 
          return_obj = {
            month: +(menu_code[0] + menu_code[1]),
            year: +(menu_code[3] + menu_code[4]),
            no_due_date: menu_code === "No Due Date",
            complete: $active_menu.closest("ul").find("li").eq(0).attr("data-block") === "Completed",
            $menu: $active_menu
          }; 
          name_array.pop();
          return_obj.name = name_array.join(' ');
      return return_obj;
    },
    findHeadLi: function(flag) {
      var $current = flag === "all" ? $("#every_todos li") : $("#completed_todos li");
      return $current;
    },
    findID: function($item) {
      return +$item.find("input[type='hidden']").val();
    },
    findParent: function(e) {
      return $(e.target).closest(".list_items > li");
    },
    formatDate: function(month, day, year) {
      var return_string;

      month = month < 1 || month > 12 ? "" : month + "";
      day = day < 1 || day > 31 ? "" : day + "";
      year = year < 2010 || year > 2050 ? "" : year + "";

      if (month.length === 1) { month = "0" + month; }
      if (day.length === 1) { day = "0" + day; }

      return_string = (year && month && day) ? year + "/" + month + "/" + day : "";
      return return_string;
    },
    getMenuIndex: function(key, flag) {
      var index;

      this.collection_by_menu.forEach(function(menu, idx){
        if(menu.key === key && menu.flag === flag) {
          index = idx;
          return false;
        }
      });

      return index;
    },
    getTodosIndex: function(id) {
      var index;

      this.todo_collection.forEach(function(todo, idx) {
        if(todo.id === id) {
          index = idx;
          return false;
        }
      });

      return index;
    },
    getMenuItem: function(key, flag) {
      var return_menu;

      this.collection_by_menu.forEach(function(menu){
        if(menu.key === key && menu.flag === flag) {
          return_menu = menu;
          return false;
        }
      });

      return return_menu;
    },
    getTodo: function(id) {
      var return_todo;

      this.todo_collection.forEach(function(todo) {
        if (todo.id === id) {
          return_todo = todo;
          return false; 
        }
      });

      return return_todo;
    },
    init: function() {
      this.cacheTemplate();
      this.bindEvents();
      this.loadStorage();
    },
    loadStorage: function() {
      this.setLastId(localStorage.getItem("jk_last_id"));
      this.setSideMenu(localStorage.getItem("jk_top_menu"),localStorage.getItem("jk_bottom_menu"));
      this.setTodoList(localStorage.getItem("jk_todos_collection"));
      this.setMenuTodos(localStorage.getItem("jk_todo_menu"));
      this.setActiveMenu(localStorage.getItem("jk_active_menu"));
    },
    insertNewMenu: function($todo, new_key) {
      var id = this.findID($todo),
          todo = this.getTodo(id),
          $active_menu = $("aside li").filter(".active"),
          first_li_data = $active_menu.closest("ul").find("li").eq(0).attr("data-block"),
          flag = first_li_data === "All Todos" ? "all" : "";
      new_key = this.unknownMenu($todo);
      if(todo.due_date !== "") { 
        if (!this.menuAlreadyExists(new_key, flag)) { this.addMenuItem(new_key, flag); }
      }
      else {
        if (!this.menuAlreadyExists("No Due Date", flag)) { this.addMenuItem("No Due Date", flag); }
        new_key = "No Due Date";
      }
      
      this.findHeadLi(flag).filter("[data-block='" + new_key + "']").click();
      $active_menu = $("aside li").filter(".active"); 
      if ($active_menu.attr("data-block") !== "All Todos" && $active_menu.attr("data-block") !== "Completed" ) { 
        this.changeMenuCount(new_key, 1, flag); 
      }
    },
    loadSide: function() {
      var $current = $("#every_todos");

      this.top_menu.forEach(function(item) {
        if (item.val === "No Due Date") {
          $current.find("li").eq(0).after("<li data-block=\"" + item.val + "\"><a href=\"\">" + item.val + " <p>0</p></a></li>");
        }
        else {
          $current.append("<li data-block=\"" + item.val + "\"><a href=\"\">" + item.val + " <p>0</p></a></li>");
        }
      });

      $current = $("#completed_todos");

      this.bottom_menu.forEach(function(item) {
        if (item.val === "No Due Date") {
          $current.find("li").eq(0).after("<li data-block=\"" + item.val + "\"><a href=\"\">" + item.val + " <p>0</p></a></li>");
        }
        else {
          $current.append("<li data-block=\"" + item.val + "\"><a href=\"\">" + item.val + " <p>0</p></a></li>");
        }
      });
    },
    loadTodos: function() {
      var $todo,
          title,
          self = this;

      this.todo_collection.forEach(function(todo) {
        $todo = $(self.template.replace(/ID/g, todo.id));
        title = todo.due_date ? todo.due_date + " - " + todo.title : todo.title;
        $todo.find("[name^=year]").val(todo.due_date.slice(0, 4));
        $todo.find("[name^=month]").val(todo.due_date.slice(5, 7));
        $todo.find("[name^=day]").val(todo.due_date.slice(8));
        $todo.find("[name^=description]").val(todo.description);
        $todo.find("[name^=title]").val(todo.title);
        $todo.find("a").text(title);
        $(".list_items").prepend($todo);
        if (todo.complete) { 
          $todo.find("a").toggleClass("checked");
          $todo.find(":checkbox").prop("checked", true);
        }
      });
    },
    markComplete: function(e) {
      e.preventDefault();
      var $todo = this.findParent(e),
          $checkbox = $todo.find(":checkbox");

      if (this.getTodo(this.findID($todo)).complete === true) {
        return;
      }

      this.closeModal();
      if (!$checkbox.is(":checked")) { $checkbox.click(); }
    },
    menuAlreadyExists: function(key, flag) {
      $current = this.findHeadLi(flag);
      if($current.filter("[data-block='"+ key + "']").get(0)) {
        return true;
      }
      return false;
    },
    openModal: function(e) {
      e.preventDefault();
      var $todo = $(e.target);

      $todo.siblings(".todo_update").css ({
        top: $(window).scrollTop() + 30
      });
      $todo.nextAll("div").fadeIn(500);
    },
    removeEmptyMenu: function($todo) {
      var id = this.findID($todo),
          todo = this.getTodo(id),
          flag = todo.complete ? "" : "all",
          $current_menu = $("aside li").filter(".active"),
          current_title = $current_menu.attr("data-block"),
          current_head_key = this.findHeadLi(flag).attr("data-block"),
          index;
      if (current_title !== "All Todos" && current_title !== "Completed" ) {
        this.changeMenuCount($("h1").text(), -1, flag);
        if (current_head_key === "Completed") {
          this.changeMenuCount("All Todos", -1, "all");
          this.changeMenuCount($("h1").text(), -1, "all");
        }
        if ($current_menu.find("p").text() === "1") {
          index = this.getMenuIndex(current_title, flag);
          this.collection_by_menu.splice(index, 1);
          this.removeObsolteMenu(current_title, flag);
          $("aside li").filter("[data-block='All Todos']").click();        
          $current_menu.remove();
          if (current_head_key === "Completed") {
            index = this.getMenuIndex(current_title, "all");
            this.collection_by_menu.splice(index, 1);
            this.removeObsolteMenu(current_title, flag);
            $("aside li").filter("[data-block='" + current_title + "']").remove();
            $("aside li").filter("[data-block='Completed']").click();
          }
        }
      }
    },
    removeToggleMenu: function($todo) {
      var id = this.findID($todo),
          todo = this.getTodo(id),
          flag = "",
          $current_active = $("aside li").filter(".active"),
          current_title = $current_active.attr("data-block"),
          current_head_key = "Completed",
          index;
      this.changeMenuCount($("h1").text(), -1, "");

      if ($current_active.find("p").text() === "1") {
        index = this.getMenuIndex(current_title, flag);
        this.collection_by_menu.splice(index, 1);
        this.removeObsolteMenu(current_title, flag);
        $("#completed_todos li").filter("[data-block='" + current_title + "']").remove();
      }
    },
    removeObsolteMenu: function(val, flag) {
      var index,
          query_array = flag === "all" ? this.top_menu : this.bottom_menu;
      
      query_array.forEach(function(e, i) {
        if (val === e.val) {
          index = i;
          return false;
        }
      });

      query_array.splice(index, 1);
      index;
    },
    setActiveMenu: function(obj) {
      if (obj === null) { return; } 
      obj = JSON.parse(obj);
   
      this.changeMenuItem(obj.val, obj.flag);
    },
    setLastId: function(val) {
      if(val === null) { return; }
      this.last_id = +val;
    },
    setLocalStorage: function(item, val) {
      localStorage.setItem(item, val);
    },
    setMenuTodos: function(menu_todos) {
      if (menu_todos === null) { return; }
      this.collection_by_menu = JSON.parse(menu_todos);
    },
    setSideMenu: function(top, bottom) {
      if(top === null || bottom === null) { return; }
      this.top_menu = JSON.parse(top);
      this.bottom_menu = JSON.parse(bottom);
      this.loadSide();
    },
    setTodoList: function(todo_items) {
      if (todo_items === null) { return; }
      this.todo_collection = JSON.parse(todo_items);
      this.loadTodos();
    },
    showTodos: function(todos) {
      $(".list_items > li").hide();
      todos.forEach(function(todo) {
        $(".list_items").find("[name=todo_id_" + todo.id + "]").closest("li").show();
      });
    },
    toggleComplete: function(e) {
      var $todo = this.findParent(e),
          id = this.findID($todo),
          todo = this.getTodo(id),
          active_title = $("aside li").filter(".active").attr("data-block"),
          active_menu = $("aside li").filter(".active").closest("ul").find("li").eq(0).attr("data-block"),
          $cached_links = active_menu === "All Todos" ? $("#every_todos li") : $("#completed_todos li"),
          temp_index,
          queried_link;
      todo.complete = !todo.complete;
      $todo.find("a").toggleClass("checked");
      $("aside li").filter("[data-block='Completed']").click();
      if ($todo.find(":checkbox").is(":checked")) {
        this.insertNewMenu($todo, active_title);
        this.changeMenuCount("Completed", 1, "");
        $todo.appendTo(".list_items");

        temp_index = this.getTodosIndex(id);
        this.todo_collection.unshift(this.todo_collection.splice(temp_index, 1)[0]);
      }
      else {
        todo.complete = !todo.complete;
        queried_link = this.unknownMenu($todo);
        $("#completed_todos li").filter("[data-block='" + queried_link + "']").click();
        this.removeToggleMenu($todo);
        this.changeMenuCount("Completed", -1, "");
        todo.complete = !todo.complete;
        $todo.prependTo(".list_items");

        temp_index = this.getTodosIndex(id);
        this.todo_collection.push(this.todo_collection.splice(temp_index, 1)[0]);
      }
      $cached_links.filter("[data-block='" + active_title + "']").click();
      this.saveData();

      this.updatePage();
    },
    unknownMenu: function($todo) {
      var month = $todo.find("[name^=month]").val(),
          year = $todo.find("[name^=year]").val(),
          new_key;

      if (month.length === 1) { month = "0" + month; }
      if(month === "") {
        new_key = "No Due Date";
      }
      else {
        new_key = month + "/" + year[2] + year[3];
      }

      return new_key;
    },
    update: function($todo) {
      var id = this.findID($todo),
          todo = this.getTodo(id),
          day = $todo.find("[name^=day]").val(),
          month = $todo.find("[name^=month]").val(),
          year = $todo.find("[name^=year]").val(),
          new_key,
          full_title;

      todo.due_date = this.formatDate(+month, +day, +year);
      if (!todo.due_date) {
        $todo.find("[name^=day]").val("");
        $todo.find("[name^=month]").val("");
        $todo.find("[name^=year]").val("");
      }
      todo.title = full_title = $todo.find("[name^=title]").val();
      todo.description = $todo.find("[name^=description]").val();
      if (todo.due_date) { full_title = todo.due_date + " - " + full_title; }
      $todo.find("a").text(full_title);

      new_key = todo.due_date[5] + todo.due_date[6] + "/" + todo.due_date[2] + todo.due_date[3];
      this.insertNewMenu($todo, new_key);
    },
    updateMenuCount: function() {
      var $current;

      this.collection_by_menu.forEach(function(todo) {
        if (todo.value !== null) { 
          $current = todos.findHeadLi(todo.flag);
          $current.filter("[data-block='" + todo.key + "']").find("p").text(todo.value);
        }
      });
    },
    updatePage: function() {
      var options = this.filterOptions(),
          todo_items,
          completed_items,
          month_test,
          year_test,
          current_head = $("aside li").filter(".active").closest("ul").find("li").eq(0).attr("data-block"),
          flag = false;

      todo_items = this.todo_collection.filter(function(todo) {
        flag = false;
        month_test = +(todo.due_date[5] + todo.due_date[6]);
        year_test = +(todo.due_date[2] + todo.due_date[3]);
        if (!options.month || (month_test === options.month && year_test === options.year)) { flag = true; }
        if (month_test && options.no_due_date) { flag = false; }
        
        return flag;
      });

      completed_items = todo_items.filter(function(todo) {
        if (todo.complete) {
          return true;
        }
      });


      this.updateMenuCount();

      $("h1").text(options.name);
      
      current_head === "All Todos" ? $("h1 + span").text(todo_items.length) : $("h1 + span").text(completed_items.length);
      current_head === "All Todos" ? this.showTodos(todo_items) : this.showTodos(completed_items);
    },
    updateTodo: function(e) {
      e.preventDefault();
      var $todo = this.findParent(e);

      if (this.getTodo(this.findID($todo)).complete === true) {
        return;
      }

      this.removeEmptyMenu($todo);
      this.update($todo);
      this.closeModal();
      this.saveData();
      this.updatePage();
    }
  };
})();

$($.proxy(todos.init, todos));
