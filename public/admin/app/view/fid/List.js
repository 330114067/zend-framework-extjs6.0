Ext.define('admin.view.fid.List', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.fidList',
			store : 'FidStore',
			selModel : Ext.create('Ext.selection.CheckboxModel'),
			border : 0,
			initComponent : function() {
				this.columns = [{
							header : '编号',
							width : 85,
							align: 'center',
							
							dataIndex : 'fid'
						}, {
							header : '功能名称',
							width : 200,
							align: 'center',
							sortable: true,
							dataIndex : 'name'
						}, {
							header : '链接地址',
							dataIndex : '',
							renderer : function(value, meta, record) {
								meta.attr = 'style="white-space:normal;align:"center"';
								return value;
							}
						}];
				this.tbar = [{
							text : '新增用户',
							action : 'fidAdd',
							iconCls : 'useradd'
						}, '-', {
							text : '删除用户',
							action : 'fidDelete',
							iconCls : 'Userdelete'
						}, '-', {
							xtype : 'textfield',
							emptyText : '请输入查询关键词',
							name : 'seakey'
						}, {
							text : '查询',
							action : 'userSearch',
							iconCls : 'Zoom'
						}], this.bbar = Ext.create('Ext.PagingToolbar', {
							store : this.store,
							displayInfo : true,
							displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
							emptyMsg : "没有数据"
						});
				this.callParent(arguments);
			}
		});