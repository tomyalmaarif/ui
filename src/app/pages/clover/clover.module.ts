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

import { DevicesComponent } from 'app/pages/things/devices/devices.component';
import { ChannelsComponent } from 'app/pages/things/channels/channels.component';
import { DevicesDetailsComponent } from 'app/pages/things/devices/details/devices.details.component';
import { ChannelsDetailsComponent } from 'app/pages/things/channels/details/channels.details.component';
import { GatewaysComponent } from 'app/pages/things/gateways/gateways.component';
import { GatewaysDetailsComponent } from 'app/pages/things/gateways/details/gateways.details.component';
import { GatewaysInfoComponent } from 'app/pages/things/gateways/details/info/gateways.info.component';
import { GatewaysConfigComponent } from 'app/pages/things/gateways/details/config/gateways.config.component';

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
    DevicesComponent,
    ChannelsComponent,
    DevicesDetailsComponent,
    ChannelsDetailsComponent,
    GatewaysComponent,
    GatewaysDetailsComponent,
    GatewaysInfoComponent,
    GatewaysConfigComponent,
  ],
  entryComponents: [
    ConfirmationComponent,
  ],
})
export class CloverModule { }
