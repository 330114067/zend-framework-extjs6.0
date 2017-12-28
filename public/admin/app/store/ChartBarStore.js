Ext.define('admin.store.ChartBarStore', {
			extend : 'Ext.data.Store',
			autoLoad : true,
			model : 'admin.model.ChartBarModel',
			proxy : {
				type : 'ajax',
				api : {
					read : '../ChartBar/getInfo.html',
					update : '../ChartBar/editInfo.html',
					create : '../ChartBar/addInfo.html',
					destroy : '../ChartBar/delInfo.html'
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