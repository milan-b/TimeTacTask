
Ext.define('InterviewApp.view.myMainList.List', {
    extend: 'Ext.grid.Panel',

    xtype: 'myMainlist',

    requires: [
        'InterviewApp.store.Personnel',
        'InterviewApp.view.myMainList.ListController'
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
                Ext.create('Ext.window.Window', {
                    title: 'Add person',
                    height: 225,
                    width: 400,
                    layout: 'fit',
                    modal: true,
                    items:
                        [
                            { xtype: 'addPerson' }
                        ]
                }).show();

            }
        },
        {
            xtype: 'button',
            text: 'Select second row',
            handler: function (toolbar) {
                var grid = toolbar.up('grid');
                grid.setSelection(1);
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
        { text: 'Addres', dataIndex: 'first_name', flex: 1 },
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
                handler: 'deletePeson'
            }]
        }
    ],

    listeners: {
        rowclick: 'onItemSelected'
    }

});
