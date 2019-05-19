
Ext.define('InterviewApp.view.myMainList.List',{
    extend: 'Ext.grid.Panel',

    xtype: 'myMainlist',

    //requires: [
    //    'InterviewApp.view.myMainList.ListController',
    //    'InterviewApp.view.myMainList.ListModel'
    //],

    requires: [
        'InterviewApp.store.Personnel',
        'InterviewApp.view.myMainList.ListController',
    ],

    controller: 'mymainlist-list',

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
