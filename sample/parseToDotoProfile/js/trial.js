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
      "dblclick label.attribute-content" : "edit",
      //"click .attribute-destroy"   : "clear", //may not need this either
      "keypress .edit"      : "updateOnEnter",
      "blur .edit"          : "close"
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
      this.model.save({content: this.input.val()});
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
      "keypress #new-attribute":  "createOnEnter"
    },

    el: ".content",

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting todos that might be saved to Parse.
    initialize: function() {
      var self = this;

      _.bindAll(this, 'addOne', 'addAll', 'addSome', 'render', 'createOnEnter');

      // Main todo management template
      this.$el.html(_.template($("#manage-user-attributes").html()));

      this.input = this.$("#new-attribute");

      // Create our collection of attributes
      this.userAttributes = new userAttributeList;

      // Setup the query for the collection to look for attributes from the current user
      this.userAttributes.query = new Parse.Query(Todo);
      this.userAttributes.query.equalTo("user", Parse.User.current());

      this.userAttributes.bind('add',     this.addOne);
      this.userAttributes.bind('all',     this.render);

      // Fetch all the todo items for this user
      this.userAttributes.fetch();

      state.on("change", this.filter, this);
    },

  });

});
