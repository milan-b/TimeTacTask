
Ext.define('InterviewApp.view.myMainList.List', {
    extend: 'Ext.grid.Panel',

    xtype: 'myMainlist',

    requires: [
        'InterviewApp.store.Personnel',
        'InterviewApp.view.myMainList.ListController',
    ],

    controller: 'mymainlist-list',

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    tbar: [
        {
            xtype: 'button',
            text: 'Add record',
            handler: function () {
                var formPanel = Ext.create('Ext.form.Panel', {
                    renderTo: document.body,
                    bodyPadding: 10,
                    defaultType: 'textfield',
                    name: 'AddPersonForm',
                    id: 'AddPersonForm',
                    items: [
                        {
                            fieldLabel: 'First Name',
                            name: 'firstName',
                            regex: /.+/i,
                            msgTarget: 'under',
                            invalidText: 'This field is required.'
                        },
                        {
                            fieldLabel: 'Last Name',
                            name: 'lastName',
                            regex: /.+/i,
                            msgTarget: 'under',
                            invalidText: 'This field is required.'
                        }
                    ],
                    buttons: [
                        {
                            xtype: 'button',
                            text: 'Add',
                            handler: function () {
                                var form = this.up('form');
                                console.log(form, form.getForm().findField("lastName").getValue());

                                var record = form.getRecord();
                                console.log(record);
                                if (form.isValid()) { // make sure the form contains valid data before submitting
                                    //form.updateRecord(record); // update the record with the form data
                                    //record.save({ // save the record to the server
                                    //    success: function (user) {
                                    //        Ext.Msg.alert('Success', 'User saved successfully.')
                                    //    },
                                    //    failure: function (user) {
                                    //        Ext.Msg.alert('Failure', 'Failed to save user.')
                                    //    }
                                    //});
                                } else {
                                    Ext.Msg.alert('Invalid Data', 'Please correct form errors.');
                                }
                            }
                            //disabled: this.up('form').isValid()
                        },
                        {
                            xtype: 'button',
                            text: 'Close',
                            handler: function () {
                                this.up('window').close();
                            }
                        }
                    ]
                });

                Ext.create('Ext.window.Window', {
                    title: 'Add person',
                    height: 200,
                    width: 400,
                    layout: 'fit',
                    modal: true,
                    items: 
                        [
                            formPanel
                        ]
                }).show();

            }
        }
    ],

    columns: [
        {
            text: '', dataIndex: 'avatar', sortable: false, renderer: function (value) {
                return Ext.String.format('<img src="{0}" height="42" width="42">', value);
            }
        },
        { text: 'Name', dataIndex: 'fullname', flex: 1 },
        { text: 'Active', dataIndex: 'active', xtype: 'checkcolumn', flex: 1 },
        {
            text: 'Action',
            flex: 1,
            xtype: 'actioncolumn',
            width: 50,
            items: [{
                iconCls: 'x-fa fa-pencil-square',
                tooltip: 'Edit',
                handler: function (grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    Ext.Msg.show({ title: 'Edit', message: "Edit " + rec.get('fullname'), buttons: false });
                }
            }, {
                iconCls: 'x-fa fa-trash',
                tooltip: 'Delete',
                handler: function (grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    Ext.Msg.show({
                        title: 'Delete Changes?',
                        message: "Do you want to delete  " + rec.get('fullname') + '?',
                        icon: Ext.Msg.QUESTION,
                        buttons: Ext.MessageBox.YESNO,
                        fn: function (btn) {
                            if (btn === 'yes') {
                                var rec = grid.getStore().getAt(rowIndex);
                                grid.getStore().remove(rec);
                            }
                        }
                    });
                }
            }]
        }
    ],

    listeners: {
        rowclick: 'onItemSelected'
    }

});
