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
        {
            name: 'avatar', type: 'string', convert: function (val) {
                return val ? val : 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
            }
        },
        { name: 'active', type: 'boolean', defaultValue: 1 }

    ]
});
