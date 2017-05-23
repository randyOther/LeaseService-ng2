import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';
import { DefaultModal } from './common/modals/default-modal.component';
import { BaseService } from './common/services/baseService';
@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [Pages,DefaultModal],
  entryComponents: [
    DefaultModal
  ],
  providers:[
    BaseService
  ]
})
export class PagesModule {
}
