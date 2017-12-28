Ext.define('admin.view.grade.Edit', {
			extend : 'Ext.window.Window',
			alias : 'widget.gradeEdit',
			title : '编辑等级信息',
			layout : 'fit',
			resizable : false,
			autoShow : true,
			initComponent : function() {
				this.items = [{
							xtype : 'form',
							bodyPadding : 5,
							fieldDefaults : {
								allowBlank : false,
								labelAlign : 'right',
								labelWidth : 60
							},
							defaultType : 'textfield',
							items : [{
										name : 'id',
										fieldLabel : 'ID',
										hidden : true,
										allowBlank : true
									}, {
										name : 'name',
										fieldLabel : '姓名'
									}, {
										xtype : 'numberfield',
										name : 'grade',
										fieldLabel : '等级'
									}, {
										name : 'country',
										fieldLabel : '国家'
									}, {
										name : 'spouse',
										fieldLabel : '配偶',
										allowBlank : true
									}, {
										name : 'faction',
										fieldLabel : '帮派'
									}, {
										xtype : 'numberfield',
										name : 'ranking',
										fieldLabel : '排名',
										minValue : 1
									}]
						}];
				this.buttons = [{
							text : '保存',
							action : 'gradeEditSave'
						}, {
							text : '取消',
							action : 'gradeEditClose'
						}];
				this.buttonAlign = 'center', this.callParent(arguments);
			}
		})