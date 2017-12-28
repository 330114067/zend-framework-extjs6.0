Ext.define('admin.view.layout.Footer', {
			extend : 'Ext.panel.Panel',
			id:'Footer',
			initComponent : function() {
				Ext.apply(this, {
							region : 'south',
							cls : 'footer',
							height : 25,
							split : true,
							html : 'Copyright © 2018 zhaotianxin  All Rights Reserved'
						});
				this.callParent(arguments);
			}
		});