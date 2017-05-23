import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';
import { DefaultModal } from './common/modals/default-modal.component';
@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [Pages,DefaultModal],
  entryComponents: [
    DefaultModal
  ]
})
export class PagesModule {
}
