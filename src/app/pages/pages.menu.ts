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
            title: '基础设置',
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
                title: '用户设置',
              }
            }   
          },
          {
            path:'roleSetting',
            data:{
              menu:{
                title:'角色设置'
              }
            }
          },
          {
            path:'companySetting',
            data:{
              menu:{
                title:'公司设置'
              }
            }
          }
        ]
      }
    ]
  }
];
