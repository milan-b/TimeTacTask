Ext.define('InterviewApp.view.myMainList.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mymainlist-list',


    onItemSelected: function (sender, record) {
        Ext.toast({ html: 'You cicked on ' + record.get('fullname'), align: 'tr' });
    }


});
