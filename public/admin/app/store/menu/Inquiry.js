Ext.define('admin.store.menu.Inquiry', {
			extend : 'Ext.data.TreeStore',
			proxy : {
				type : 'ajax',
				url : '../admin/inquiry',
				noCache : false,
				actionMethods : {
					read : 'GET'
				}
			}
		})