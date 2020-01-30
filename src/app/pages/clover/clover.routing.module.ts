import { Routes } from '@angular/router';

import { ChannelsComponent } from 'app/pages/things/channels/channels.component';
import { DevicesComponent } from 'app/pages/things/devices/devices.component';
import { DevicesDetailsComponent } from 'app/pages/things/devices/details/devices.details.component';
import { ChannelsDetailsComponent } from 'app/pages/things/channels/details/channels.details.component';
import { GatewaysComponent } from 'app/pages/things/gateways/gateways.component';
import { GatewaysDetailsComponent } from 'app/pages/things/gateways/details/gateways.details.component';

export const routes: Routes = [
  {
    path: 'devices',
    component: DevicesComponent,
  },
  {
    path: 'devices/details/:id',
    component: DevicesDetailsComponent,
  },
  {
    path: 'channels',
    component: ChannelsComponent,
  },
  {
    path: 'channels/details/:id',
    component: ChannelsDetailsComponent,
  },
  {
    path: 'gateways',
    component: GatewaysComponent,
  },
  {
    path: 'gateways/details/:id',
    component: GatewaysDetailsComponent,
  },
];

export class CloverRoutingModule {}
