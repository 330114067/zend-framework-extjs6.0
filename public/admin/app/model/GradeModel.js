Ext.define('admin.model.GradeModel', {
			extend : 'Ext.data.Model',
			fields : [{
						name : 'id',
						type : 'int'
					}, {
						name : 'name',
						type : 'string'
					}, {
						name : 'grade',
						type : 'string'
					}, {
						name : 'country',
						type : 'string'
					}, {
						name : 'spouse',
						type : 'string'
					}, {
						name : 'faction',
						type : 'string'
					}, {
						name : 'ranking',
						type : 'int'
					}]
		});
