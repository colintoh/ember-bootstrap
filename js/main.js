require(['helper/app'],function(App){

	//Create Router
	var initRouter = Em.Router.create({
		root: Em.Route.extend({
			index:Em.Route.extend({
				route:'/',
				connectOutlets:function(router){
					//router.get('applicationController').connectOutlet('camera');
				}
			})
		})
	});

	App.initialize(initRouter);
});
