   
Ext.define('admin.view.user.Edit',{
	extend:'Ext.window.Window',
	alias:'widget.userEdit',
	title:'编辑用户信息',	
	layout:'fit',
	resizable : false,
	autoShow:true,
	initComponent:function(){
		var me = this;
		this.items=[
			{
				xtype:'form',
				bodyPadding : 5,
				fieldDefaults:{
					allowBlank : false,
					labelAlign :'right',
					labelWidth : 120
				},
				defaultType:'textfield',
				items:[
					{name:'id',fieldLabel:'用户ID',hidden:true,allowBlank:true},
					{name:'org_id',fieldLabel:'用户ID',hidden:true,allowBlank:true,value:1},
					{name:'group_id',fieldLabel:'用户ID',hidden:true,allowBlank:true,value:1},
					{name:'name',fieldLabel:'姓名',blankText: '请输入姓名',msgTarget: 'under',regex : /[\u4e00-\u9fa5]/,regexText:"只能输入中文!"},
					{name:'login_name',fieldLabel:'登录用户名',regex:/[a-zA-Z]{5,16}/,regexText:'用户名必须是5~16位英文字母',blankText: '请输入登录用户名',msgTarget: 'under'},
					{
					 xtype: 'textfield',
                          inputType: 'password',
                          name: 'password',
                          id: 'password',
                          fieldLabel: '密码',
                          tooltip: '请输入密码',
                          allowBlank: false,
                          blankText: '请输入密码',
                          regex: /^[\s\S]{0,32}$/,
                          regexText: '密码长度不能超过32个字符',
                          msgTarget: 'under'
					},
//                     {
//                     	inputType: 'password',
//                        fieldLabel:"确认密码",   
//                        name:'pw',
//                        value:'1111',
//				        validator: function(value){  
//                        var pw = this.previousSibling().value;
//                        if(value != pw){  
//                            return '两次输入的密码不一致';  
//                        }else{  
//                            return true;  
//                        }  
//                    	},
//                    	blankText: '请再次输入密码',
//                    	msgTarget: 'under'
//				       
//                    },
					{
						xtype:'fieldcontainer',
						defaultType: 'radiofield',
						layout: 'hbox',
						fieldLabel:'用户是否可以登录',
						defaults: {
							flex: true
						},
						items:[
							{name:'enabled',boxLabel:'是',inputValue:'1'},
							{name:'enabled',boxLabel:'否',inputValue:'2',checked: true}
						]
					},
					{
						xtype:'fieldcontainer',
						defaultType: 'radiofield',
						layout: 'hbox',
						fieldLabel:'性别',
						defaults: {
							flex: true
						},
						items:[
							{name:'gender',boxLabel:'男',inputValue:'1'},
							{name:'gender',boxLabel:'女',inputValue:'2',checked: true}
						]
					}, {
							id : "editBirthday",
							fieldLabel : "生日",
							xtype : "datefield",
							format : "Y-m-d",
							name : "birthday",value:"birthday"?new Date():null 
				
						},
					{
						xtype:'textfield',
						name:'id_card_number',
						fieldLabel:'身份证号',
						inputValue:'id_card_number',
						regex : /^((11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65|71|81|82|91)\d{4})((((19|20)(([02468][048])|([13579][26]))0229))|((20[0-9][0-9])|(19[0-9][0-9]))((((0[1-9])|(1[0-2]))((0[1-9])|(1\d)|(2[0-8])))|((((0[1,3-9])|(1[0-2]))(29|30))|(((0[13578])|(1[02]))31))))((\d{3}(x|X))|(\d{4}))$/,
						regexText : '请输入正确的身份证号！',
						blankText: '请输入身份证号',
						msgTarget: 'under'
					},
					{name:'tel',fieldLabel:'联系电话',blankText: '联系电话',msgTarget: 'under',inputValue:'tel'},
					{name:'tel02',fieldLabel:'备用联系电话',allowBlank: true,inputValue:'tel02'},
					{name:'address',fieldLabel:'家庭住址',allowBlank: true,inputValue:'address'}
				]
			}
		];
		this.buttons=[
			{text:'保存',action:'userEditSave'},
			{text:'取消',action:'userEditClose'}
		];
		this.buttonAlign='center',
		me.callParent(arguments);
	}
})