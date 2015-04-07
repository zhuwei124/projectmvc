(function(){
})();

// start the application
$(function(){
	brite.display("MainView","body",{name:123}).done(function(){
		app.ctx.init();
	});
});
