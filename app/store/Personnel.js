Ext.define('InterviewApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'Personnel',
    proxy: {
        type: 'rest',
        url: '/users.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true

});

