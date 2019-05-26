Ext.define('InterviewApp.view.myMainList.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mymainlist-list',


    onItemSelected: function (sender, record) {
        Ext.toast({ html: 'You cicked on ' + record.get('fullname'), align: 'tr' });
    },

    deletePeson: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        Ext.Msg.show({
            title: 'Delete Changes?',
            message: "Do you want to delete " + rec.get('fullname') + '?',
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


});
