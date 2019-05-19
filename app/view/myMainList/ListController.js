Ext.define('InterviewApp.view.myMainList.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mymainlist-list',


    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you for sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            // 
        }
    }
});
