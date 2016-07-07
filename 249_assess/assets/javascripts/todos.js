var todos; 

(function() {
  todos = {
    todo_collection: [],
    collection_by_menu: [],
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
    addTodo: function() {
      var todo = this.add(),
          $todo = $(this.template.replace(/ID/g, todo.id));

      $(".list_items").prepend($todo);
      this.changeMenuCount(0, 1);
      this.changeMenuCount(1, 1);
      this.setLocalStorage("last_id", this.last_id);
      this.setLocalStorage("todos", JSON.stringify(this.todo_collection));

      this.changeMenuItem(1);
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
          menu_index = $("aside li").index(event_li);
      this.changeClass(class_name, event_li);
      this.setLocalStorage("active_menu", menu_index);
      this.updatePage();
    },
    changeMenuCount: function(index, value) {
      if (!this.collection_by_menu[index]) { 
        this.collection_by_menu[index] = 0; 
      }
      this.collection_by_menu[index] += value;
      this.setLocalStorage("todo_menu", JSON.stringify(this.collection_by_menu));
    },
    changeMenuItem: function(index) {
      $("aside li").eq(index).click();
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
      var $todo = this.findParent(e).remove(),
          id = this.findID($todo),
          todo = this.getTodo(id);

      this.delete(this.findID($todo));
      if(!todo.complete) {
        this.changeMenuCount(0, -1);
        this.changeMenuCount(this.getMenuIndex(todo), -1);
      }
      this.setLocalStorage("todos", JSON.stringify(this.todo_collection));

      this.updatePage();
    },
    filterOptions: function() {
      var $active_menu = $("aside ul").find(".active"),
          menu_code = $active_menu.attr("data-block"),
          name_array = $active_menu.find("a").text().replace(/\s+/g, " ").trim().split(" "), 
          return_obj = {
            month: +(menu_code[1] + menu_code[2]),
            no_due_date: menu_code === "i99",
            complete: menu_code[0] === "f",
            $menu: $active_menu
          }; 
          if (!return_obj.complete) { name_array.pop(); }
          return_obj.name = name_array.join(' ');
      return return_obj;
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
      year = year < 1900 || year > 2100 ? "" : year + "";

      if (month.length === 1) { month = "0" + month; }
      if (day.length === 1) { day = "0" + day; }

      return_string = (year && month && day) ? year + "/" + month + "/" + day : "";
      return return_string;
    },
    getMenuIndex: function(todo) {
      var index = +(todo.due_date[5] + todo.due_date[6]) + 1;
      if (index === 1) { index--; }
      if (!index) { index = 1; }
      return index;
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
      this.setLastId(localStorage.getItem("last_id"));
      this.setTodoList(localStorage.getItem("todos"));
      this.setMenuTodos(localStorage.getItem("todo_menu"));
      this.setActiveMenu(localStorage.getItem("active_menu"));
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

        $(".list_items").append($todo);
      });
    },
    markComplete: function(e) {
      e.preventDefault();
      var $todo = this.findParent(e),
          $checkbox = $todo.find(":checkbox");

      this.closeModal();
      if (!$checkbox.is(":checked")) { $checkbox.click(); }
    },
    openModal: function(e) {
      e.preventDefault();
      var $todo = $(e.target);

      $todo.siblings(".todo_update").css ({
        top: $(window).scrollTop() + 30
      });
      $todo.nextAll("div").fadeIn(500);
    },
    setActiveMenu: function(index) {
      if (index === null) { return; }    
      this.changeMenuItem(index);
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
          todo = this.getTodo(id);

      todo.complete = !todo.complete;
      $todo.find("a").toggleClass("checked");
      if ($todo.find(":checkbox").is(":checked")) {
        this.changeMenuCount(this.getMenuIndex(todo), -1);
        this.changeMenuCount(0, -1);
      }
      else {
        this.changeMenuCount(this.getMenuIndex(todo), 1);
        this.changeMenuCount(0, 1);
      }
      this.setLocalStorage("todos", JSON.stringify(this.todo_collection));

      this.updatePage();
    },
    update: function($todo) {
      var id = this.findID($todo),
          todo = this.getTodo(id),
          day = +$todo.find("[name^=day]").val(),
          month = +$todo.find("[name^=month]").val(),
          year = +$todo.find("[name^=year]").val(),
          full_title;

      todo.due_date = this.formatDate(month, day, year);
      if (!todo.due_date) {
        $todo.find("[name^=day]").val("");
        $todo.find("[name^=month]").val("");
        $todo.find("[name^=year]").val("");
      }
      todo.title = full_title = $todo.find("[name^=title]").val();
      todo.description = $todo.find("[name^=description]").val();
      if (todo.due_date) { full_title = todo.due_date + " - " + full_title; }
      $todo.find("a").text(full_title);
      if (!todo.complete) { this.changeMenuCount(this.getMenuIndex(todo), 1); }
    },
    updateMenuCount: function() {
      this.collection_by_menu.forEach(function(todo_count, idx) {
        if (todo_count !== null) { 
          $("aside ul:first-child li").eq(idx).find("p").text(todo_count); 
        }
      });
    },
    updatePage: function() {
      var options = this.filterOptions(),
          todo_items,
          month_test,
          flag = false;

      todo_items = this.todo_collection.filter(function(todo) {
        flag = false;
        month_test = todos.getMenuIndex(todo) - 1; // due_date is yyyy/mm/dd
        if (options.month === 0 || month_test === options.month) { flag = true; }
        if (!month_test && options.no_due_date) { flag = true; } // if month_test is NaN
        if (todo.complete !== options.complete) { flag = false; }
        return flag;
      });

      $("h1").text(options.name);
      $("h1 + span").text(todo_items.length);
      options.$menu.find("p").text(todo_items.length);

      this.updateMenuCount();
      this.showTodos(todo_items);
    },
    updateTodo: function(e) {
      e.preventDefault();
      var $todo = this.findParent(e),
          id = this.findID($todo),
          todo = this.getTodo(id);

      if (!todo.complete) { this.changeMenuCount(this.getMenuIndex(todo), -1); }
      this.update($todo);
      this.closeModal();
      this.setLocalStorage("todos", JSON.stringify(this.todo_collection));

      this.updatePage();
    }
  };
})();


$($.proxy(todos.init, todos));
