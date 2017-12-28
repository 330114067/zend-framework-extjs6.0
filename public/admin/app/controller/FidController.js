Ext.define('admin.controller.FidController', {
			extend : 'Ext.app.Controller',
			models : ['FidModel'],
			stores : ['FidStore'],
			views : ['fid.List', 'fid.Edit'],
			refs : [{
						ref : 'FidList',
						selector : 'fidList'
					}],
			init : function() {
				this.control({
							'fidList' : {
								itemdblclick : this.fidEdit
							},
							'fidEdit button[action=fidEditSave]' : {
								click : this.fidEditSave
							},
							'fidList button[action=fidAdd]' : {
								click : this.fidAdd
							},
							'fidList button[action=fidDelete]' : {
								click : this.fidDelete
							},
							'fidEdit button[action=fidEditClose]' : {
								click : this.fidEditClose
							}
						});
			},
			fidEdit : function(grid, record) {
				var view = Ext.widget('fidEdit');
				view.down('form').loadRecord(record);
			},
			fidAdd : function(button) {
				var view = Ext.widget('fidEdit');
			},
			fidEditSave : function(button) {
				var win = button.up('window'), form = win.down('form'), record = form
						.getRecord(), values = form.getValues(), store = this
						.getStore('FidStore'), model = this
						.getModel('FidModel');

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
			fidDelete : function(button) {
				var grid = this.getFidList(), record = grid.getSelectionModel()
						.getSelection(), store = this.getStore('FidStore');
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
			fidEditClose : function(button) {
				button.up('window').close()
			}
		});