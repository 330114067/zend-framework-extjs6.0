var cancelMode;
Ext.Ajax.request({
	url: '../admin/getmenu',
    method: 'post',
    sync:true, //同步请求
    success: function(response) {
         cancelMode = Ext.util.JSON.decode(response.responseText);
         for(var i=0;i<cancelMode.length;i++){
         	cancelMode[i].rootVisible=false;
         }
         
    }              
})  
Ext.define('admin.view.layout.Sidebar', {
			extend : 'Ext.panel.Panel',
			id:'Sidebar',
			region : 'west',
			autoScroll: true,
			title : '管理菜单',
			xtype : 'sidebar',
			iconCls : 'Sitemap',
			split : true,
			collapsible : true,
			columnLines : false,
			width : 180,
			border: true,
			rootVisible: false,
			layout : {
				type : 'accordion',
				titleCollapse : true,
				animate : true,
				activeOnTop : false
			},
			initComponent : function() {
				Ext.apply(this, {
					items:cancelMode
				});
				this.callParent(arguments);
			}

		});