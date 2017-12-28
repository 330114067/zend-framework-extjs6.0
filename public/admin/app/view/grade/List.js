Ext.define('admin.view.grade.List', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.gradeList',
			store : 'GradeStore',
			selModel : Ext.create('Ext.selection.CheckboxModel'),
			border : 0,
			initComponent : function() {
				this.columns = [{
							header : '编号',
							dataIndex : 'id',
							flex : 0.5
						}, {
							header : '姓名',
							dataIndex : 'name',
							flex : 1
						}, {
							header : '等级',
							dataIndex : 'grade',
							flex : 1
						}, {
							header : '国家',
							dataIndex : 'country',
							flex : 1
						}, {
							header : '配偶',
							dataIndex : 'spouse',
							flex : 0.5
						}, {
							header : '帮派',
							dataIndex : 'faction',
							flex : 1
						}, {
							header : '排名',
							dataIndex : 'ranking',
							flex : 1
						}];
				this.tbar = [{
							text : '新增信息',
							action : 'gradeAdd',
							iconCls : 'Useradd'
						}, '-', {
							text : '删除信息',
							action : 'gradeDelete',
							iconCls : 'Userdelete'
						}, '-', {
							xtype : 'textfield',
							emptyText : '请输入查询关键词',
							name : 'seakey'
						}, {
							text : '查询',
							action : 'gradeSearch',
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