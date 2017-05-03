import { NgModule } from "@angular/core";
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing } from "./setting.routing";
import { SettingComponent } from "./setting.component";
import {UserSetting} from './user/userSetting.component';
import {UserSettingInputsComponent} from './user/components/settingInputs/settingInput.component';
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
    ],
    declarations:[
        SettingComponent,
        UserSetting,
        UserSettingInputsComponent
    ]
})

export class SettingModule{}