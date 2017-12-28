Ext.define('admin.store.menu.Config', {
			extend : 'Ext.data.TreeStore',
			proxy : {
				type : 'ajax',
				url : 'config',
				noCache : false,
				actionMethods : {
					read : 'GET'
				}
			}
		})