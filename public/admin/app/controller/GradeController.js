Ext.define('admin.controller.GradeController', {
			extend : 'Ext.app.Controller',
			models : ['GradeModel'],
			stores : ['GradeStore'],
			views : ['grade.List', 'grade.Edit'],
			refs : [{
						ref : 'GradeList',
						selector : 'gradeList'
					}],
			init : function() {
				this.control({
							'gradeList' : {
								itemdblclick : this.gradeEdit
							},
							'gradeEdit button[action=gradeEditSave]' : {
								click : this.gradeEditSave
							},
							'gradeList button[action=gradeAdd]' : {
								click : this.gradeAdd
							},
							'gradeList button[action=gradeDelete]' : {
								click : this.gradeDelete
							},
							'gradeEdit button[action=gradeEditClose]' : {
								click : this.gradeEditClose
							}
						});
			},
			gradeEdit : function(grid, record) {
				var view = Ext.widget('gradeEdit');
				view.down('form').loadRecord(record);
			},
			gradeAdd : function(button) {
				var view = Ext.widget('gradeEdit');
			},
			gradeEditSave : function(button) {
				var win = button.up('window'), form = win.down('form'), record = form
						.getRecord(), values = form.getValues(), store = this
						.getStore('GradeStore'), model = this
						.getModel('GradeModel');

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
			gradeDelete : function(button) {
				var grid = this.getGradeList(), record = grid
						.getSelectionModel().getSelection(), store = this
						.getStore('GradeStore');
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
			gradeEditClose : function(button) {
				button.up('window').close()
			}
		});