import { NgModule } from "@angular/core";
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HotTable, HotTableModule } from 'ng2-handsontable';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from "./setting.routing";
import { SettingComponent } from "./setting.component";
import {UserSetting} from './user/userSetting.component';
import {UserSettingInputsComponent} from './user/components/settingInputs/settingInput.component';
import { RoleComponent } from "./role/role.component";
import { RoleSettingComponent } from "./role/components/roleSetting/roleSetting.component";
import { RoleSettingService } from "./role/components/roleSetting/roleSetting.service";
@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgaModule,
        Ng2SmartTableModule,
        DataTableModule,
        HotTableModule,
        NgbModalModule,
        SlimLoadingBarModule.forRoot(),
        routing
    ],
    declarations:[
        SettingComponent,
        UserSetting,
        UserSettingInputsComponent,
        RoleComponent,
        RoleSettingComponent
    ],
    providers:[
        RoleSettingService
    ]
})

export class SettingModule{}