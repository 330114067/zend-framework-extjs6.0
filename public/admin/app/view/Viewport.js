Ext.define('admin.view.Viewport',{
	extend: 'Ext.Viewport',
	layout: 'fit',
	xtype:'app-main',
	id: "mainContent",
	requires: [
		'admin.view.layout.Header',
		'admin.view.layout.Sidebar',
		'admin.view.layout.Footer',
	    'admin.view.layout.Main'
	],
	initComponent: function(){
		Ext.apply(this,{
			layout:'border',
			items:[
				Ext.create('admin.view.layout.Header'),
				Ext.create('admin.view.layout.Sidebar'),
				Ext.create('admin.view.layout.Footer'),
				Ext.create('admin.view.layout.Main')
			]
		});
		this.callParent(arguments);
	}
});