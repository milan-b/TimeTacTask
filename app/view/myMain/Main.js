
Ext.define('InterviewApp.view.myMain.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'InterviewApp.view.myMain.MainController',
        'InterviewApp.view.myMain.MainModel'
    ],

    controller: 'mymain-main',
    viewModel: {
        type: 'mymain-main'
    },

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
            title: 'Personnel',
            iconCls: 'fa-users',

            items: [
                {
                    xtype: 'myMainlist'
                }
            ]
        }
    ]
});
