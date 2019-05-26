Ext.define('InterviewApp.view.myForm.AddPersonController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.myform-addperson',

    addNewPerson: function (context) {
        var form = context.up('form');
        if (form.isValid()) {
            var rec = {
                first_name: form.getForm().findField("firstName").getValue(),
                last_name: form.getForm().findField("lastName").getValue()
            };
            var personnelStore = Ext.data.StoreManager.lookup('peronnelStore');
            personnelStore.insert(0, rec);
            context.up('window').close();
        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.');
        }
    }

});
