Ext.define('admin.model.UserModel', {
			extend : 'Ext.data.Model',
			fields : [{
						name : 'id',
						type : 'int'
					}, {
						name : 'name',
						type : 'string'
					}, {
						name : 'enabled',
						type : 'int'
					}, {
						name : 'password',
						type : 'string'
					}, {
						name : 'group_id',
						type : 'int'
					}, {
						name : 'org_id',
						type : 'int'
					}, {
						name : 'login_name',
						type : 'string'
					}, {
						name : 'gender',
						type : 'string'
					}, {
						name : 'py',
						type : 'string'
					}, {
						name : 'tel',
						type : 'string'
					}, {
						name : 'birthday',
						type : 'string'
					}, {
						name : 'id_card_number',
						type : 'string'
					}, {
						name : 'tel02',
						type : 'string'
					}, {
						name : 'address',
						type : 'string'
					}]
		});
