Ext.define('admin.view.user.Edit',{
	extend:'Ext.window.Window',
	alias:'widget.userEdit',
	title:'编辑用户信息',	
	layout:'fit',
	resizable : false,
	autoShow:true,
	initComponent:function(){
		this.items=[
			{
				xtype:'form',
				bodyPadding : 5,
				fieldDefaults:{
					allowBlank : false,
					labelAlign :'right',
					labelWidth : 60
				},
				defaultType:'textfield',
				items:[
					{name:'id',fieldLabel:'用户ID',hidden:true,allowBlank:true},
					{name:'name',fieldLabel:'用户名',regex:/[a-zA-Z]{5,16}/,regexText:'用户名必须是5~16位英文字母'},
					{
						xtype:'fieldcontainer',
						defaultType: 'checkbox',
						layout: 'hbox',
						fieldLabel:'管理员',
						items:[
							{name:'root',boxLabel:'是',inputValue:'1'}
						]
					},
					{name:'xm',fieldLabel:'姓名'},
					{
						xtype:'fieldcontainer',
						defaultType: 'radiofield',
						layout: 'hbox',
						fieldLabel:'性别',
						defaults: {
							flex: 1
						},
						items:[
							{name:'xb',boxLabel:'男',inputValue:'男'},
							{name:'xb',boxLabel:'女',inputValue:'女'}
						]
					},
					{xtype:'numberfield',name:'nl',fieldLabel:'年龄',maxValue: 150,minValue:1}
				]
			}
		];
		this.buttons=[
			{text:'保存',action:'userEditSave'},
			{text:'取消',action:'userEditClose'}
		];
		this.buttonAlign='center',
		this.callParent(arguments);
	}
})