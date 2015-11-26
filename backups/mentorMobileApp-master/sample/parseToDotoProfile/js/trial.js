// An example Parse.js Backbone application based on the todo app by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses Parse to persist
// the todo items and provide user authentication and sessions.

$(function() {

      Parse.$ = jQuery;

      // Initialize Parse with your Parse application javascript keys
      Parse.initialize("QsLB4iUTW6GmgiVumYJ39cajTFnanijYdodplnGI",
        "R3JOMH0D0iE9gLIDEdFuOjdmALTO7KpOD1MBGzRT");


      var userAttribute = Parse.Object.extend("userAttribute", {

        defaults: function() {
          return {
            content: "empty attribute"
              //,empty: true
          };
        }

      });

      // This is the transient application state, not persisted on Parse
      var AppState = Parse.Object.extend("AppState", {
        defaults: {
          filter: "all"
        }
      });

      var userAttributeList = Parse.Collection.extend({

        model: userAttribute,

        // empty: funtion() {
        //   return "attribute empty";
        //   //also need to change empty:false when the user fills in value
        // }

      });

      var userAttributes = new userAttributeList;

      var attributeView = Parse.View.extend({

        //do I need a tag name?
        tarName: "li",

        template: _.template($('#item-template').html()),

        events: {
          "dblclick label.attribute-content": "edit",
          //"click .attribute-destroy"   : "clear", //may not need this either
          "keypress .edit": "updateOnEnter",
          "blur .edit": "close"
        },

        initialize: function() {
          _.bindAll(this, 'render', 'close', 'remove');
          this.model.bind('change', this.render);
          this.model.bind('destroy', this.remove);
        },

        render: function() {
          $(this.el).html(this.template(this.model.toJSON()));
          this.input = this.$('.edit');
          return this;
        },

        edit: function() {
          $(this.el).addClass("editing");
          this.input.focus();
        },

        close: function() {
          this.model.save({
            content: this.input.val()
          });
          $(this.el).removeClass("editing");
        },

        // If you hit `enter`, we're through editing the item.
        updateOnEnter: function(e) {
          if (e.keyCode == 13) this.close();
        }

      });

      // The Application
      // ---------------

      // The main view that lets a user manage their todo items
      var ManageUserAttributes = Parse.View.extend({

          events: {
            "keypress #new-attribute": "createOnEnter"
          },

          el: ".content",

          // At initialization we bind to the relevant events on the `Todos`
          // collection, when items are added or changed. Kick things off by
          // loading any preexisting todos that might be saved to Parse.
          initialize: function() {
            var self = this;

            _.bindAll(this, 'addOne', 'addAll', 'addSome', 'render', 'createOnEnter');

            // Main todo management template
            this.$el.html(_.template($("#manage-userAttributes-template").html()));

            this.input = this.$("#new-attribute");

            // Create our collection of attributes
            this.userAttributes = new userAttributeList;

            // Setup the query for the collection to look for attributes from the current user
            this.userAttributes.query = new Parse.Query(Todo);
            this.userAttributes.query.equalTo("user", Parse.User.current());

            this.userAttributes.bind('add', this.addOne);
            this.userAttributes.bind('all', this.render);

            // Fetch all the todo items for this user
            this.userAttributes.fetch();

            state.on("change", this.filter, this);
          },

          // Add a single todo item to the list by creating a view for it, and
          // appending its element to the `<ul>`.
          addOne: function(todo) {
            var view = new TodoView({
              model: todo
            });
            this.$("#todo-list").append(view.render().el);
          },

          // If you hit return in the main input field, create new Todo model
          createOnEnter: function(e) {
            var self = this;
            if (e.keyCode != 13) return;

            this.todos.create({
              content: this.input.val(),
              //order:   this.userAttributes.nextOrder(),
              //done:    false,
              user: Parse.User.current(),
              ACL: new Parse.ACL(Parse.User.current())
            });

            this.input.val('');

          }
        });

        // The main view for the app
        var AppView = Parse.View.extend({
          // Instead of generating a new element, bind to the existing skeleton of
          // the App already present in the HTML.
          el: $("#userapp"),

          initialize: function() {
            this.render();
          }

        });

        var state = new AppState;

        new AppView; 

      });
