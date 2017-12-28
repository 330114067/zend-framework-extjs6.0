Ext.define('admin.controller.InfoController', {
			extend : 'Ext.app.Controller',
			models : ['InfoModel'],
			stores : ['InfoStore'],
			views : ['info.List', 'info.Edit'],
			refs : [{
						ref : 'InfoList',
						selector : 'infoList'
					}],
			init : function() {
				this.control({
							'infoList' : {
								itemdblclick : this.infoEdit
							},
							'infoEdit button[action=infoEditSave]' : {
								click : this.infoEditSave
							},
							'infoList button[action=infoAdd]' : {
								click : this.infoAdd
							},
							'infoList button[action=infoDelete]' : {
								click : this.infoDelete
							},
							'infoEdit button[action=infoEditClose]' : {
								click : this.infoEditClose
							}
						});
			},
			infoEdit : function(grid, record) {
				var view = Ext.widget('infoEdit');
				view.down('form').loadRecord(record);
			},
			infoAdd : function(button) {
				var view = Ext.widget('infoEdit');
			},
			infoEditSave : function(button) {
				var win = button.up('window'), form = win.down('form'), record = form
						.getRecord(), values = form.getValues(), store = this
						.getStore('InfoStore'), model = this
						.getModel('InfoModel');

				if (form.getForm().isValid()) {
					if (values.id > 0) {
						record.set(values);
					} else {
						record = Ext.create(model);
						record.set(values);
						store.add(record);
					}
					win.close();
					store.sync();
					store.load();
				}
			},
			infoDelete : function(button) {
				var grid = this.getInfoList(), record = grid
						.getSelectionModel().getSelection(), store = this
						.getStore('InfoStore');
				if (record.length <= 0) {
					Ext.Msg.alert('提示', '请选择您要删除的信息');
				} else {
					Ext.Msg.confirm('提示', '您确定要删除这些信息吗？', function(optional) {
								if (optional == 'yes') {
									store.remove(record);
									store.sync();
									store.load();
								}
							})
				}
			},
			infoEditClose : function(button) {
				button.up('window').close()
			}
		});