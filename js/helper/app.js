define(['libs/text!template/app.tpl'],function(application){
	window.App = window.App || Em.Application.create();

	App.ApplicationController = Em.Controller.extend();

	App.ApplicationView = Em.View.extend({
		template: Em.Handlebars.compile(application)
	});

	return App;
});