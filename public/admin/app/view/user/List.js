
Ext.define('admin.view.user.List',{
	extend:'Ext.grid.Panel',
	alias : 'widget.userList',
	store: 'UserStore', 
	selModel: Ext.create('Ext.selection.CheckboxModel'),
	border : 0,
    initComponent: function(){
	    this.columns = [
	        {header: '编号',  dataIndex: 'id',align: 'center',flex: true},
	        {header: '姓名', dataIndex: 'name',align: 'center',flex: true },
	        {header: '用户是否可以登录',  dataIndex: 'enabled',    
			     renderer: function(value, meta, record) {  
			     	var val;
			     	if(value==1){
			     		val='允许登录';
			     	}else{
			     		val='禁止登录';
			     	}
			         meta.attr = 'style="white-space:normal;"';     
			         return val;     
			    } ,flex: 0.3 ,align: 'center',flex: true
		    },
	        {header: '用户登录名',  dataIndex: 'login_name',align: 'center',flex: true},
			{header: '用户名称的拼音字头',  dataIndex: 'py',align: 'center',flex: true},
			{header: '性别',  dataIndex: 'gender',align: 'center',
			 renderer: function(value, meta, record) {  
			     	var val;
			     	if(value==1){
			     		val='男';
			     	}else{
			     		val='女';
			     	}
			         meta.attr = 'style="white-space:normal;"';     
			         return val;     
			    },flex: true},
	        {header: '生日', dataIndex: 'birthday',align: 'center',flex: true},
	        {header: '身份证号',  dataIndex: 'id_card_number',align: 'center',flex: true},
	        {header: '联系电话',  dataIndex: 'tel',align: 'center',flex: true},
	        {header: '备用联系电话',  dataIndex: 'tel02',align: 'center',flex: true},
	        {header: '家庭住址', dataIndex: 'address',align: 'center',flex: true}
	      
	    ];
		this.tbar=[{  
                    text : '新增用户',  
                    action:'userAdd',
					iconCls:'Useradd'
                },'-',{  
                    text : '删除用户',  
                    action:'userDelete',
					iconCls:'Userdelete'
                },'-',{
                	 id: 'seakey',
					xtype:'textfield',
					emptyText : '登录用户名或者姓名',
                    name : 'seakey'
                },{  
                    text : '查询',  
                    action:'userSearch',
					iconCls:'Zoom'
                }],
		this.bbar=Ext.create('Ext.PagingToolbar', {   
					store: this.store,
					displayInfo: true,   
					displayMsg: '显示 {0} - {1} 条，共计 {2} 条',   
					emptyMsg: "没有数据"   
				}  
		);
	    this.callParent(arguments);
    }
});