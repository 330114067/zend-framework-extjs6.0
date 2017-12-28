Ext.define('admin.store.menu.Inquiry', {
			extend : 'Ext.data.TreeStore',
			proxy : {
				type : 'ajax',
				url : 'inquiry',
				noCache : false,
				actionMethods : {
					read : 'GET'
				}
			}
		})