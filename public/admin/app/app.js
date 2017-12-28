Ext.Loader.setConfig({enabled:true});
Ext.application({
	name: 'admin',
	appFolder: '../../public/admin/app',
	autoCreateViewport: false,
	controllers: [
		'LoginController',
		'MainController'
//		'UserController',
//		'ConfigNetsetController',
//		'ConfigDbsetController',
//		'GradeController',
//		'FidController'
//		'ChartLineController',
//		'ChartBarController'
	],
	launch:function(){
	},
	show:function(user){
		this.sessionUser = user;
		this.viewport = Ext.create('admin.view.Viewport' );

	},
	showLogout : function(){
		Ext.getCmp("Footer").hide();
		Ext.getCmp("Header").hide();
		Ext.getCmp("Main").hide();
		Ext.getCmp("Sidebar").hide();
				
		this.viewport = Ext.create('admin.view.login.Login' );
//		this.getController('admin.controller.LoginController').showLogin();

	}
});

