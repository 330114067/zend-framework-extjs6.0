Ext.define('admin.model.InfoModel', {
			extend : 'Ext.data.Model',
			fields : [{
						name : 'id',
						type : 'int'
					}, {
						name : 'title',
						type : 'string'
					}, {
						name : 'content',
						type : 'string'
					}]
		});
