Ext.define('InterviewApp.model.Personnel', {
    extend: 'Ext.data.Model',

    alias: 'model.Personnel',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'first_name', type: 'string' },
        { name: 'last_name', type: 'string' },
        {
            name: 'fullname', type: 'string', convert: function (val, record) {
                return record.data.first_name + ' ' + record.data.last_name;
            }
        },
        { name: 'avatar', type: 'string' },
        { name: 'active', type: 'boolean', defaultValue: 1 }

    ]
});
