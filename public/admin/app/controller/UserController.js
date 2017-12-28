Ext.define('admin.controller.UserController',{
	extend: 'Ext.app.Controller',
    models: ['UserModel'],
    stores: ['UserStore'],
	views:['user.List','user.Edit'],
	refs: [{
            ref: 'UserList',
            selector: 'userList'
    }],
    init: function () {
        this.control({
			'userList'                              :  {itemdblclick:this.userEdit},
			'userEdit button[action=userEditSave]'  :  {click:this.userEditSave},
            'userList button[action=userAdd]'       :  {click: this.userAdd},
            'userList button[action=userDelete]'    :  {click: this.userDelete},
            'userEdit button[action=userEditClose]' :  {click: this.userEditClose}
		});
    },
	userEdit:function(grid,record){
		var view=Ext.widget('userEdit');
		view.down('form').loadRecord(record);
	},
	userAdd:function(button){
		var view=Ext.widget('userEdit');
	},
	userEditSave:function(button){
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues(),
			store  = this.getStore('UserStore'),
			model  = this.getModel('UserModel');
			
			if(form.getForm().isValid()){
				if(values.id > 0){
					record.set(values);
				}else{
					record = Ext.create(model);
					record.set(values);
					store.add(record);
				}
				win.close();
				store.sync();
				store.load();
			}
	},
    userDelete: function(button) {
    	var grid = this.getUserList(),
			record = grid.getSelectionModel().getSelection(),
			store = this.getStore('UserStore');			
			if(record.length<=0){
				Ext.Msg.alert('提示','请选择您要删除的信息');
			}else{
				Ext.Msg.confirm('提示','您确定要删除这些信息吗？',function(optional){
					if(optional=='yes'){
						store.remove(record);
						store.sync();
						store.load();
					}
				})
			}
    },
	userEditClose:function(button){
		button.up('window').close()
	}
});