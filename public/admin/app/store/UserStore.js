Ext.define('admin.store.UserStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    pageSize: 50,
	autoLoad: {start: 0, limit: 50},
    model: 'admin.model.UserModel',
	proxy:{
		type: 'ajax',
		api: {
			read: 'getInfo',
			update: 'editInfo',
			create: 'addInfo',
			destroy: 'delInfo'
		},
		reader: {
			type: 'json',
			rootProperty: 'data',
			successProperty: 'success',
			totalProperty: 'totalCount'
		},
		writer: {
			type: 'json'
		},
		actionMethods: {
			read: 'POST'
		}
	}
});