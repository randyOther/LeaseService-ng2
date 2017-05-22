export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path:'setting',
        data:{
           menu: {
            title: 'Setting',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 800,
          }
        },
        children:[
          {
            path: 'userSetting',
            data: {
              menu: {
                title: 'UserSetting',
              }
            }   
          },
          {
            path:'roleSetting',
            data:{
              menu:{
                title:'RoleSetting'
              }
            }
          }
        ]
      }
    ]
  }
];
