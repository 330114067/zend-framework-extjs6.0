Ext.define('admin.controller.ConfigDbsetController', {
			extend : 'Ext.app.Controller',
			views : ['config.Dbset'],
			init : function() {
				this.control({
							'configDbset' : {
								afterrender : this.loadrecord
							}, // 初始化表单数据
							'configDbset button[action=savebtn]' : {
								click : this.editSave
							}, // 编辑提交
							'configDbset button[action=resetbtn]' : {
								click : this.resetForm
							} // 重置表单数据（在修改后未保存时 从服务器重新获取数据）
						});
			},
			// 加载数据并赋值给表单组件
			loadrecord : function(component, eOpts) {
				this.loadData(component);
			},
			// 保存表单值到服务器
			editSave : function(button) {
				var basic = button.up('form').getForm();
				if (basic.isValid()) {
					basic.submit({
								url : "../ConfigDbset/editInfo.html",
								waitMsg : '数据提交中，请稍等...',
								success : function(form, action) {
									Ext.Msg.alert('提示', action.result.message);
								},
								failure : function(form, action) {
									Ext.Msg.alert('提示',
											action.result.errorMessage);
								}
							});
				}
			},
			// 重置表单元素值（即：从服务器重新获取数据）
			resetForm : function(button) {
				this.loadData(button.up('form'));
			},
			// 赋值给表单元素
			loadData : function(component) {
				component.getForm().load({
							url : '../ConfigDbset/getInfo.html',
							waitMsg : '数据加载中，请稍等...'
						});
			}
		});