Ext.define('InterviewApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'InterviewApp.model.Personnel',

    storeId: 'peronnelStore',

    proxy: {
        type: 'rest',
        url: 'https://reqres.in/api/users',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true

});

