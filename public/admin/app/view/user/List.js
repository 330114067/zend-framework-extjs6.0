
Ext.define('admin.view.user.List',{
	extend:'Ext.grid.Panel',
	alias : 'widget.userList',
	store: 'UserStore', 
	selModel: Ext.create('Ext.selection.CheckboxModel'),
	border : 0,
    initComponent: function(){
	    this.columns = [
	        {header: '编号',  dataIndex: 'id'},
	        {header: '用户名', dataIndex: 'name' },
	        {header: '用户类型ssssssssssssssssssssssss',  dataIndex: 'root',    
     renderer: function(value, meta, record) {    
         meta.attr = 'style="white-space:normal;"';     
         return value;     
    }  },
	        {header: '姓名',  dataIndex: 'xm',  flex: 1},
	        {header: '性别ssssssssssssssssssssssssssssss',  dataIndex: 'xb'},
			{header: '年龄',  dataIndex: 'nl'},
			{header: '编ssssssssssssssssss号',  dataIndex: 'id'},
	        {header: '用户名', dataIndex: 'name'},
	        {header: '用户类型',  dataIndex: 'root'},
	        {header: '姓名',  dataIndex: 'xm'},
	        {header: '性别',  dataIndex: 'xb'},
	        {header: '用户名', dataIndex: 'name'},
	        {header: '用户类型ssssssssssssssssssssssss',  dataIndex: 'root'},
	        {header: '姓名',  dataIndex: 'xm'},
	        {header: '性别ssssssssssssssssssssssssssssss',  dataIndex: 'xb'},
			{header: '年龄',  dataIndex: 'nl'},
			{header: '编ssssssssssssssssss号',  dataIndex: 'id'},
	        {header: '用户名', dataIndex: 'name'},
	        {header: '用户类型',  dataIndex: 'root'},
	        {header: '姓名',  dataIndex: 'xm'},
	        {header: '性别',  dataIndex: 'xb'},
			{header: '年龄',  dataIndex: 'nl'}
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
					xtype:'textfield',
					emptyText : '请输入查询关键词',
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