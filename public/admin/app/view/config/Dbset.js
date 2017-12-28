Ext.define('admin.view.config.Dbset', {
			extend : 'Ext.form.Panel',
			alias : 'widget.configDbset',
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
							fieldLabel : '数据库类型',
							name : 'db_type',
							emptyText : '请输入数据库类型',
							anchor : '100%'
						}, {
							xtype : 'textfield',
							fieldLabel : '服务器',
							name : 'db_host',
							emptyText : '请输入服务器地址',
							anchor : '100%'
						}, {
							xtype : 'textfield',
							fieldLabel : '数据库名称',
							name : 'db_name',
							emptyText : '请输入数据库名称',
							anchor : '100%'
						}, {
							xtype : 'textfield',
							fieldLabel : '用户名',
							name : 'db_user',
							emptyText : '请输入用户名',
							anchor : '100%'
						}, {
							xtype : 'textfield',
							fieldLabel : '密码',
							name : 'db_pwd',
							emptyText : '请输入密码',
							anchor : '100%'
						}, {
							xtype : 'numberfield',
							fieldLabel : '端口',
							name : 'db_port',
							emptyText : '请输入端口',
							anchor : '100%'
						}, {
							xtype : 'textfield',
							fieldLabel : '表前缀',
							name : 'db_prefix',
							emptyText : '请输入表前缀',
							allowBlank : true,
							anchor : '100%'
						}, {
							xtype : 'textfield',
							fieldLabel : '字符集',
							name : 'db_charset',
							emptyText : '请输入字符集',
							anchor : '100%'
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