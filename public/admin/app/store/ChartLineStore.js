Ext.define('admin.store.ChartLineStore', {
			extend : 'Ext.data.Store',
			autoLoad : true,
			model : 'admin.model.ChartLineModel',
			proxy : {
				type : 'ajax',
				api : {
					read : '../ChartLine/getInfo.html',
					update : '../ChartLine/editInfo.html',
					create : '../ChartLine/addInfo.html',
					destroy : '../ChartLine/delInfo.html'
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