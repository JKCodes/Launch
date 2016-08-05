var todo_list=JSON.parse(localStorage.getItem("todos"))||[],
    templates={};

$(function(){
  function b(d){
    this.title=this.findObjectByProp(d,"name","title").value;
    this.year=this.findObjectByProp(d,"name","due_year").value;
    this.month=this.findObjectByProp(d,"name","due_month").value;
    this.day=this.findObjectByProp(d,"name","due_day").value;
    this.description=this.findObjectByProp(d,"name","description").value;
    this.id=this.last_id;
    this.completed=false;
    this.due_date=this.formatDate()
  }

  b.prototype = {
    constructor: b,
    last_id: localStorage.getItem("id")||0,
    todos: todo_list||[],
    done: [],
    selected: [],
    current_section: {
      element: "all_header",
      title: "All Todos",
      data:0
    },
    todos_by_date: {},
    done_todos_by_date: {},
    init: function() {
      this.setDone();
      this.groupItems("todos_by_date",this.todos);
      this.groupItems("done_todos_by_date",this.done);
      this.saveData();
    },
    findObjectByProp: function(f,e,d) {
      return f.filter(function(g) { 
        return g[e]===d
      })[0];
    },
    createNew: function(d) {
      this.last_id++;
      var e = new b(d);
      this.todos.push(e);
      this.init();
      console.log(this);
    },
    formatDate: function() {
      var d="No Due Date";

      if(this.month!=="Month"&&this.year!=="Year") {
        d=this.month+"/"+this.year.slice(2)
      }
      return d;
    },
    deleteItem: function(e) {
      var d=this.todos.indexOf(this.itemFromID(e)),
          done_idx=this.done.indexOf(this.itemFromID(e));
      this.todos.splice(d,1);
      if(done_idx!==-1){ 
        this.done.splice(done_idx,1)
      }
      this.init();
    },
    itemFromID: function(d) {
      return this.todos.filter(function(e) {
        return e.id===+d
      })[0];
    },
    markComplete: function(d) { 
      d.completed=true;
      this.init()
    },
    toggleComplete:function(e) {
      var d=this.itemFromID(e);
      d.completed = d.completed ? false : true;
      this.init()
    },
    updateItem: function(e,d) {
      e.title=this.findItemByProp(d,"name","title").value;
      e.year=this.findItemByProp(d,"name","due_year").value;
      e.month=this.findItemByProp(d,"name","due_month").value;
      e.day=this.findItemByProp(d,"name","due_day").value;
      e.description=this.findItemByProp(d,"name","description").value;
      this.formatDate.call(e);
      this.init()
    },
    findItemByProp: function(f,e,d) {
      return f.filter(function(g) {
        return g[e]===d
      })[0]
    },
    setDone: function() {
      this.done=this.todos.filter(function(d) {
        return d.completed
      })
    },
    saveData: function(){
      localStorage.setItem("todos",JSON.stringify(this.todos));
      localStorage.setItem("done_todos",JSON.stringify(this.done));
      localStorage.setItem("id",this.last_id)
    },
    groupItems: function(f,e) {
      this[f]={};
      var d=this[f];
      this.sortByDate(e).forEach(function(h){
        var g=d[b.prototype.formatDate.call(h)];
        if(g&&g.indexOf(h)===-1) {
          d[b.prototype.formatDate.call(h)].push(h)
        }
        else {
          d[b.prototype.formatDate.call(h)]=[];
          d[b.prototype.formatDate.call(h)].push(h)
        }
      })
    },
    sortByDate: function(e) {
      var f=e.filter(function(g) {
        return g.due_date!=="No Due Date"
      }).sort(this.compareDates),
      d=e.filter(function(g) {
        return g.due_date==="No Due Date"
      });
      return d.concat(f)
    },
    compareDates: function(e,d) {
      if(+e.year<+d.year) {
        return -1
      }
      else {
        if(+e.year>+d.year) {
          return 1
        }
        else {
          if(+e.month<+d.month) {
            return -1 
          }
          else {
            if(+e.month>+d.month) {
              return 1
            } 
            else { 
              return 0
            }
          }
        }
      }
    }
  };

  var c = {
    init: function() { 
      $("script[type='text/x-handlebars']").each(function() {
        $templ=$(this);
        templates[$templ.attr("id")]=Handlebars.compile($templ.html())
      });
      $("script[data-type='partial']").each(function() {
        $templ=$(this);
        Handlebars.registerPartial($templ.attr("id"),$templ.html())
      })
    },
    renderForm: function(d) {
      $(".modal").fadeIn(d).filter("#form_modal").css({ 
        top:$(window).scrollTop()+200
      });
      $("#modal_layer").off("click").on("click",c.hideForm)
    },
    newForm: function() { 
      this.resetFormInputs();
      this.renderForm(500)
    },
    editForm: function(d) {
      this.renderForm(500);
      $("[name='title']").val(d.title);
      $("[name='due_year']").find("option:first-of-type").text(d.year);
      $("[name='due_month']").find("option:first-of-type").text(d.month);
      $("[name='due_day']").find("option:first-of-type").text(d.day);
      $("[name='description']").val(d.description)
    },
    resetFormInputs: function() { 
      $("form")[0].reset();
      $("[name='due_year']").find("option:first-of-type").text("Year");
      $("[name='due_month']").find("option:first-of-type").text("Month");
      $("[name='due_day']").find("option:first-of-type").text("Day")
    },
    hideForm: function(d) {
      $(".modal").fadeOut(d)
    },
    updateTitle: function() {
      $("#items header").html(templates.title_template(b.prototype))
    },
    markAsDone: function(d) {
      $("tr[data-id="+d+"]").find(":checkbox").attr("checked","checked")
    },
    markUndone: function(d) {
      $("tr[data-id="+d+"]").find(":checkbox").attr("checked",false)
    }
  };

  var a = {
    index: function() { 
      b.prototype.selected=this.sort_todos(b.prototype.todos);
      $("body").html(templates.main_template(b.prototype));
      this.setSelected($("#all_header"));
      $("#all_header").attr("class","active");
      this.bind()
    },
    completed: function() { 
      b.prototype.selected=this.sort_todos(b.prototype.done);
      $("body").html(templates.main_template(b.prototype));
      this.setSelected($("#all_done_header"));
      $("#"+b.prototype.current_section.element).attr("class","active");
      this.bind()
    },
    allInMonth: function(d) { 
      b.prototype.selected=this.sort_todos(b.prototype.todos_by_date[d]);
      $("body").html(templates.main_template(b.prototype));
      $("#all_lists").find("dl[data-title='"+b.prototype.current_section.title+"']").attr("class","active");
      this.bind()
    },
    completedInMonth: function(d) { 
      b.prototype.selected=b.prototype.done_todos_by_date[d];
      $("body").html(templates.main_template(b.prototype));
      $("#completed_lists").find("dl[data-title='"+b.prototype.current_section.title+"']").attr("class","active");
      this.bind()
    },
    newTodo: function() {
      c.newForm();
      this.create()
    },
    create: function() {
      $("form [name='complete']").off("click").on("click",function(d) {
        d.preventDefault();
        alert("Cannot mark as complete as item has not been created yet!")
      });
      $("#form_modal form").off("submit").on("submit",function(f){
        f.preventDefault();
        var d=$(f.target); 
        b.prototype.createNew(d.serializeArray());
        c.hideForm();
        a.index()
      })
    },
    removeItem: function(d) {
      idx=d.closest("tr").attr("data-id");
      b.prototype.deleteItem(idx);
      this.index()
    },
    edit: function(d) {
      var e=b.prototype.itemFromID(d);
      c.editForm(e);
      this.update(e)
    },
    update: function(d) {
      $("form [name='complete']").off("click").on("click",function(f) {
        f.preventDefault();
        b.prototype.markComplete(d);
        c.hideForm();
        c.markAsDone(d.id)
      });
      $("#form_modal form").off("submit").on("submit",function(g) {
        g.preventDefault();
        var f=$(g.target);
        b.prototype.updateItem(d,f.serializeArray());
        c.hideForm();
        a.index()
      })
    },
    sort_todos: function(e) {
      var f=[],
          d=[];
      e.forEach(function(g) {
        if(g.completed) {
          f.push(g)
        }
        else {
          d.push(g)
        }
      });
      return d.concat(f)
    },
    setSelected: function(d) { 
      b.prototype.current_section.element=d.attr("id");
      b.prototype.current_section.title=d.attr("data-title");
      b.prototype.current_section.data=d.attr("data-total");
      c.updateTitle()
    },
    bind: function() {
      $("label[for='new_item']").off("click").on("click",function() {
        a.newTodo()
      });
      $(".delete").off("click").on("click",function(f) {
        f.preventDefault;
        var d=$(f.target);
        a.removeItem(d)
      });
      $("tbody tr td.list_item label").off("click").on("click",function(g) {
        g.preventDefault();
        g.stopImmediatePropagation();
        var f=$(g.target),
            d=f.closest("tr").attr("data-id");
        a.edit(d)
      });
      $("tbody tr td.list_item").off("click").on("click",function(g) {
        g.preventDefault();
        var f=$(g.target),
            d=f.closest("tr").attr("data-id");
        b.prototype.toggleComplete(d);
        a.index()
      });
      $("#all_todos, #completed_todos").off("click").on("click",function(f) {
        $("#sidebar").find(".active").removeClass("active");
        var d=$(f.target).closest("header");
        if(d.attr("data-title")==="Completed"){ 
          a.completed()
        }
        else {
          a.index()
        }
      });
      $("#all_lists, #completed_lists").off("click").on("click",function(h) {
        var d=$(h.target).closest("dl"),
            f=d.closest("article").attr("id"),
            g=d.attr("data-title");
        $("#sidebar").find(".active").removeClass("active");
        a.setSelected(d);
        if(f==="all_lists") {
          a.allInMonth(g)
        }
        else {
          a.completedInMonth(g)
        }
      })
    }};
    c.init();b.prototype.init();a.index()
  });
