import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  NbButtonModule,
  NbCardModule,
  NbSelectModule,
  NbInputModule,
  NbListModule,
  NbCheckboxModule,
} from '@nebular/theme';

import { CloverRoutingModule } from "./clover.routing.module";
import { PagesModule } from 'app/pages/pages.module';
import { ConfirmationComponent } from 'app/shared/confirmation/confirmation.component';

import { GatewaysComponent } from 'app/pages/clover/gateways/gateways.component';
import { GatewaysDetailsComponent } from 'app/pages/clover/gateways/details/gateways.details.component';
import { ServicesComponent } from './gateways/details/services/services.component';

@NgModule({
  imports: [
    CloverRoutingModule,
    PagesModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    NbListModule,
    NbCheckboxModule,
    FormsModule,
  ],
  declarations: [
    GatewaysComponent,
    GatewaysDetailsComponent,
    ServicesComponent,
  ],
  entryComponents: [
    ConfirmationComponent,
  ],
})
export class CloverModule { }
