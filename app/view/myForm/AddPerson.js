
Ext.define('InterviewApp.view.myForm.AddPerson',{
    extend: 'Ext.form.Panel',
    xtype: 'addPerson',

    requires: [
        'InterviewApp.view.myForm.AddPersonController',
        'InterviewApp.view.myForm.AddPersonModel'
    ],

    controller: 'myform-addperson',
    viewModel: {
        type: 'myform-addperson'
    },

    renderTo: document.body,
    bodyPadding: 10,
    defaultType: 'textfield',

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
            handler: 'addNewPerson'
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