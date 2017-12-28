Ext.define('admin.view.info.List', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.userList',
			store : 'InfoStore',
			selModel : Ext.create('Ext.selection.CheckboxModel'),
			border : 0,
			initComponent : function() {
				this.columns = [{
							header : '编号',
							dataIndex : 'id',
							flex : 0.5
						}, {
							header : '标题',
							dataIndex : 'title',
							flex : 1
						}, {
							header : '内容',
							dataIndex : 'content',
							flex : 1
						}];
				this.tbar = [{
							text : '新增信息',
							action : 'userAdd',
							iconCls : 'Useradd'
						}, '-', {
							text : '删除信息',
							action : 'userDelete',
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