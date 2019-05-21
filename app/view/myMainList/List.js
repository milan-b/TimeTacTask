
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
                    store: this.up('grid').getStore(),
                    items: [
                        {
                            fieldLabel: 'First Name',
                            name: 'firstName',
                            allowBlank: false,
                            msgTarget: 'under',
                            invalidText: 'This field is required.'
                        },
                        {
                            fieldLabel: 'Last Name',
                            name: 'lastName',
                            allowBlank: false,
                            msgTarget: 'under',
                            invalidText: 'This field is required.'
                        }
                    ],
                    buttons: [
                        {
                            xtype: 'button',
                            text: 'Add',
                            formBind: true,
                            handler: function () {
                                var form = this.up('form');
                                var peronnelStore = Ext.data.StoreManager.lookup('peronnelStore');
                                if (form.isValid()) {
                                    var rec = {
                                        first_name: form.getForm().findField("firstName").getValue(),
                                        last_name: form.getForm().findField("lastName").getValue()
                                    };
                                    peronnelStore.insert(0, rec);
                                    this.up('window').close();
                                } else {
                                    Ext.Msg.alert('Invalid Data', 'Please correct form errors.');
                                }
                            }
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
                    height: 250,
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
