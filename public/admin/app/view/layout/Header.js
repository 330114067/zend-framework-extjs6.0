Ext.define('admin.view.layout.Header', {
			extend : 'Ext.panel.Panel',
			xtype : 'adminheader',
			id:'Header',
			initComponent : function() {
				Ext.apply(this, {
							region : 'north',
							height : 100,
							split : true,
							bodyCls : 'header',
							html : 'zend framework+ExtJs',
							bbar : [{
										text : '我的面板',
										iconCls : 'Computeroff',
										action : 'wdmb'
									}, '-', {
										text : '系统设置',
										iconCls : 'Cog',
										action : 'xtsz'
									}, '-', {
										text : '内容管理',
										iconCls : 'Pagewhiteedit',
										action : 'nrgl'
									}, '-', {
										text : '用户管理',
										iconCls : 'Group',
										action : 'yhgl'
									}, '->', {
										text : '使用帮助',
										iconCls : 'Help',
										action : 'sybz'
									}, '-', {
										text : '退出系统',
										iconCls : 'Usergo',
										action : 'tcxt'
									}]
						});
				this.callParent(arguments);
			}
		});
