Ext.define('admin.view.layout.Sidebar', {
			extend : 'Ext.panel.Panel',
			id:'Sidebar',
			region : 'west',
			title : '管理菜单',
			xtype : 'sidebar',
			iconCls : 'Sitemap',
			split : true,
			collapsible : true,
			width : 180,
			layout : {
				type : 'accordion',
				titleCollapse : true,
				animate : true,
				activeOnTop : false
			},
			items : [{
						title : '系统管理',
						xtype : 'treepanel',
						rootVisible : false,
						margin : 0,
						iconCls : 'Bulletwrench',
						store : 'admin.store.menu.Config'
					}, {
						title : '数据查询',
						xtype : 'treepanel',
						rootVisible : false,
						margin : 0,
						iconCls : 'Databaseedit',
						store : 'admin.store.menu.Inquiry'
					}, {
						title : '分发数据',
						xtype : 'treepanel',
						rootVisible : false,
						margin : 0,
						iconCls : 'Pagewhiteworld',
						store : 'admin.store.menu.Distribute'
					}]
		});