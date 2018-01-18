Ext.define('admin.store.menu.Config', {
			extend : 'Ext.data.TreeStore',
			proxy : {
				type : 'ajax',
				url : '../admin/config',
				noCache : false,
				actionMethods : {
					read : 'GET'
				}
			}
		})