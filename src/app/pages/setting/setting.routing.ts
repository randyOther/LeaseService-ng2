import { Router, RouterModule,Routes  } from "@angular/router";

import { SettingComponent } from "./setting.component";
import { ModuleWithProviders } from "@angular/core";

export const routes:Routes=[
    {
        path:'',
        component:SettingComponent,
        children:[

        ]
    }
];

export const routing:ModuleWithProviders=RouterModule.forChild(routes);