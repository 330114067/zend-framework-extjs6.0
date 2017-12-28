Ext.define('admin.view.config.Netset', {
			extend : 'Ext.form.Panel',
			alias : 'widget.configNetset',
			border : 0,
			initComponent : function() {
				this.bodyPadding = 10, this.fieldDefaults = {
					allowBlank : false,
					labelAlign : 'right'
				}, this.items = [{
							xtype : 'textfield',
							fieldLabel : 'ID',
							name : 'id',
							hidden : true
						}, {
							xtype : 'textfield',
							fieldLabel : '网站名称',
							name : 'web_name',
							emptyText : '请输入网站名称',
							anchor : '100%'
						}, {
							xtype : 'textfield',
							fieldLabel : '网站标题',
							name : 'web_title',
							emptyText : '请输入网站标题',
							anchor : '100%'
						}, {
							xtype : 'textarea',
							fieldLabel : '网站关键词',
							name : 'web_keywords',
							emptyText : '请输入网站关键词',
							anchor : '100% 20%'
						}, {
							xtype : 'textarea',
							fieldLabel : '网站描述',
							name : 'web_description',
							emptyText : '请输入网站描述',
							anchor : '100% 20%'
						}, {
							xtype : 'htmleditor',
							fieldLabel : '网站备注',
							name : 'web_remark',
							emptyText : '请输入网站备注',
							anchor : '100% 50%'
						}], this.bbar = ['->', {
							text : '保存',
							iconCls : 'Reportdisk',
							action : 'savebtn'
						}, {
							text : '重置',
							iconCls : 'Reload',
							action : 'resetbtn'
						}, '->'], this.callParent(arguments);
			}
		});