Ext.define('admin.controller.MainController',{
	extend: 'Ext.app.Controller',
	stores: [
		'admin.store.menu.Config',
		'admin.store.menu.Inquiry',
		'admin.store.menu.Distribute'
	],
	views:[
		'admin.view.Viewport'
	],
	init: function(){
		this.control({
            'sidebar > treepanel':{
            	afterrender:function(treepanel){
            		treepanel.on('itemclick',function(view,record,item,index){
						if (record.get('leaf')) {
						    var title = treepanel.ownerCt.ownerCt.down('#tabCenter').items.findBy(function(result) {
						        return result.title === record.get('text');
						    });
						    if (!title) {
						        treepanel.ownerCt.ownerCt.down('#tabCenter').add({
						            title: record.get('text') || '未命名标题',
						            closable: true,
						            layout: 'fit',
						            autoDestroy: true,
						            items: {
						                xtype: record.raw['xtypeClass']
						            }
						        }).show();
						    } else {
						        treepanel.ownerCt.ownerCt.down('#tabCenter').setActiveTab(title);
						    }
						
						}
					},this);
            	}
            },
			'adminheader button[action=tcxt]':{click:this.logout},
			'adminheader button[action=xtsz]':{click:this.xtsz}
		});
	},
	logout:function(button){
		var me = this;
		Ext.Msg.wait('退出中...', '提示信息');
		Ext.Ajax.request({
			url : '../admin/logout',
			callback : function(opt, success, response){
				Ext.Msg.hide();
				if(success){
					me.getApplication().showLogout();
				}else Ext.Msg.alert('提示信息', '连接服务器失败,请刷新页面');
			}
		
		});
	},
	xtsz:function(button){
		Ext.widget('fidEdit');
	}
});