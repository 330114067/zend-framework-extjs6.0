Ext.define('admin.view.layout.Main', {
	extend : 'Ext.tab.Panel',
	id:'Main',
	initComponent : function() {
		Ext.apply(this, {
			itemId : 'tabCenter',
			region : 'center',
			deferredRender : false, // deferredRender: false //重新渲染
			autoDestroy : false, // 关闭后再打开就不显示的问题经解决
			activeTab : 0,
			items : [{
				id : 'HomePage',
				title : '首页',
				items : [{
					xtype : 'panel',
					margin : 5,
					bodyPadding : 5,
					html : '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="main.html"> </iframe>'
				}, {
					xtype : 'panel',
					layout : 'column',
					border : 0,
					items : [{
								xtype : 'panel',
								margin : '0 2.5 0 5',
								columnWidth : 0.5,
								bodyPadding : 5,
								title : '在线人数统计',
								height : 400,
								layout : 'fit',
								items : [
								// Ext.create('admin.view.chart.Line')
								]
							}, {
								xtype : 'panel',
								margin : '0 3 0 2.5',
								columnWidth : 0.5,
								bodyPadding : 5,
								title : '柱型统计展示',
								height : 400,
								layout : 'fit',
								items : [
								// Ext.create('admin.view.chart.Bar')
								]
							}]
				}]
			}]
		});
		this.callParent(arguments);
	}
});