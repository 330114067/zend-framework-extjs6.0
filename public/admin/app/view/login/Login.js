Ext.define('admin.view.login.Login', {
	extend : 'Ext.window.Window',
	alias:'widget.Login',
	title: '用户登录',
        draggable: false,
        closable: false,
		resizable : false,
		autoShow : true,
        layout: 'fit',
	    initComponent: function(){
	    	this.src=imgs();
	    	this.items= { 
        	xtype: 'form',
        	constrain: true,
			bodyPadding : 5,
            defaultType: 'textfield',
            shrinkWrap: 3,
            bodyCls: 'loginformbg',
            fieldDefaults: {
            	allowBlank: false,
                labelAlign: 'center',
                labelWidth: 50,
                labelSeparator: '',
				vtype : 'alphanum',
				vtypeText : '只能是数字或字母'
         },
         items:[{
                fieldLabel: '用户名',
                name: 'username',
				id:'username',
                emptyText: '请输入用户名',
                fieldCls: 'username-ico'						
        },{
                fieldLabel: '密&nbsp;&nbsp;码',
                name: 'password',
				id:'password',
                emptyText: '请输入密码',
                inputType: 'password',
                fieldCls: 'userpassword-ico'
                    
        },{
	        	fieldCls : 'checkcode-ico',  
		        fieldLabel : '验证码',
		        name : 'verify',  
		        id : 'verify',  
		        allowBlank : false,  
		        isLoader:true,  
		        blankText : '请输入验证码', 
				emptyText: '请输入验证码',
		        codeUrl: 'getCode'
		},
		{xtype : 'image', width : 200, height : 50, src : this.src, margin : '5 0 0 5', 
			listeners : {
				render : {
					fn : function(res){
						var me = this;
						this.getEl().on('click', function(){
							var src='';
							src=imgs();
							me.setSrc(src)
						});
					}
				}
			}
		}
        ]
        };
	        this.buttons=[
	        	{text:'登录',iconCls:'Doorin',action:'loginbtn'}
	        ];
	        this.listeners= {
	            afterRender: function(thisForm, options){
	                this.keyNav = Ext.create('Ext.util.KeyNav', this.el, {
	                    enter: function(){
	                        var btn = Ext.getCmp('loginbtn');
//	                        btn.action();
	                    },
	                    scope: this
	                });
	            }
	        };
	        this.buttonAlign='center',
		    this.callParent(arguments);
	    }
});
function imgs(){
        	var src='';
			Ext.Ajax.request({
	            url: "../admin/imgcode",    
	            async: false,   // ASYNC 是否异步( TRUE 异步 , FALSE 同步)
	            success: function(response, opts) {
	            	var obj = eval( "(" + response.responseText + ")" );
	            	src="../../"+obj.imgSrc;
	            }
	  		});
  		 	return src;
        }
