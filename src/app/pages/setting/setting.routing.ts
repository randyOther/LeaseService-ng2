import { Router, RouterModule,Routes  } from "@angular/router";

import { SettingComponent } from "./setting.component";

import { ModuleWithProviders } from "@angular/core";

import {UserSetting} from './user/userSetting.component'
export const routes:Routes=[
    {
        path:'',
        component:SettingComponent,
        children:[
            {
                path:"userSetting",component:UserSetting
            }
        ]
    }
];

export const routing = RouterModule.forChild(routes);