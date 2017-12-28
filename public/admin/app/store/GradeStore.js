Ext.define('admin.store.GradeStore', {
			extend : 'Ext.data.Store',
			autoLoad : true,
			pageSize : 15,
			autoLoad : {
				start : 0,
				limit : 15
			},
			model : 'admin.model.GradeModel',
			proxy : {
				type : 'ajax',
				api : {
					read : '../Grade/getInfo.html',
					update : '../Grade/editInfo.html',
					create : '../Grade/addInfo.html',
					destroy : '../Grade/delInfo.html'
				},
				reader : {
					type : 'json',
					rootProperty : 'data',
					successProperty : 'success',
					totalProperty : 'totalCount'
				},
				writer : {
					type : 'json'
				}
			}
		});