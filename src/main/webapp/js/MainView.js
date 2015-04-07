(function(){

	brite.registerView("MainView",{parent:"body"}, {

		create: function(data){
			var data = data || {};
			//alert(data.name);
			return render("MainView");
		}, 

		init: function(){
			var view = this;
			// display the list view
			//alert("1");
			return brite.display("ProjectListView",view.$el.find(".MainView-leftPanel")).whenInit;
		},

		postDisplay: function(data){
			var view = this;
			//alert("2");
			view.$contentPanel = view.$el.find(".MainView-contentPanel");
			//alert("3");
			//display the content
			return brite.display("ContentView",view.$contentPanel);
			view.$el.trigger("TEST_TRIGGER");
		},

		events: {
			"click; .user": function(event){

			}
		},

		docEvents: {

			"APP_CTX_CHANGE": function(event){
				var view = this;
				if ("project" === app.ctx.pathAt(0) && $.isNumeric(app.ctx.pathAt(1))){
					view.projectId = app.ctx.pathAt(1) * 1;
					
					app.projectDao.get(view.projectId).done(function(project){
						// call the brite.js bEmpty jQuery extension to make sure to 
						// destroy eventual brite.js sub views
						view.$contentPanel.bEmpty();
						// display the projectt

						brite.display("ProjectView",view.$el.find(".MainView-contentPanel"),{project:project});
					});
				}
			}

		}

	});

})();
