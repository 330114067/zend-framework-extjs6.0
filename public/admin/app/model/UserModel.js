Ext.define('admin.model.UserModel', {
			extend : 'Ext.data.Model',
			fields : [{
						name : 'id',
						type : 'int'
					}, {
						name : 'name',
						type : 'string'
					}, {
						name : 'password',
						type : 'string'
					}, {
						name : 'root',
						type : 'int'
					}, {
						name : 'xm',
						type : 'string'
					}, {
						name : 'xb',
						type : 'string'
					}, {
						name : 'nl',
						type : 'int'
					}]
		});
