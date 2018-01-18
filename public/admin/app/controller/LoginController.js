Ext.define('admin.controller.LoginController',{
	extend: 'Ext.app.Controller',
    init: function () {
    	this.checkUser();
    	this.control({
			'Login button[action=loginbtn]'  :  {click:this.loginbtn}
		});
    },
    checkUser : function(){
		var me = this;
		Ext.Msg.wait('验证中,请稍候...', '提示信息');
		Ext.Ajax.request({
			url :  '../admin/checkLogin',
			callback : function(opt, success, response){
				Ext.Msg.hide();
				if(success){
					var result = Ext.decode(response.responseText);
					if(Ext.typeOf(result) == 'object' && result.user) me.showViewPort(result.user);
					else me.showLogin();
				}else Ext.Msg.alert('提示信息', '连接服务器失败,请刷新页面');
			}
		});
	},
	showViewPort:function(user){
		this.getApplication().show(user);
	},
	showLogin:function(){
		Ext.create('admin.view.login.Login');
	},
	loginbtn:function(button){
		var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
			if(form.isValid()){
				form.submit({
	                        waitMsg: '正在登录,请等待...',
	                        clientValidation: false,// 要经过客户端验证的
	                        url: '../admin/login',
	                        method: 'POST',
	                        success: function(form, action){
	                        	console.info(action);
	                        	Ext.Msg.alert(action.result.msg);
	                            if (action.result.msg == 'OK') {
	                            	localStorage.setItem("LoggedIn", true);
									Ext.Msg.alert('提示', '登录成功，页面正在跳转……');
	                                window.location.href=action.result.url;
	                            }
	                        },
	                        failure: function(form, action){
	                            Ext.Msg.alert('提示', action.result.msg, function(){
	                                form.reset();
									Ext.getCmp('username').focus();
	                            });
	                        }
	                    });
			}
			

	}
	
});