import { Router, RouterModule,Routes  } from "@angular/router";

import { SettingComponent } from "./setting.component";

import { ModuleWithProviders } from "@angular/core";

import {UserSetting} from './user/userSetting.component'
import {RoleComponent} from './role/role.component';
export const routes:Routes=[
    {
        path:'',
        component:SettingComponent,
        children:[
            {
                path:'userSetting',component:UserSetting,
            },
            {
                path:'roleSetting', component:RoleComponent
            }
        ]
    }
];

export const routing = RouterModule.forChild(routes);