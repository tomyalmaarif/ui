import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GatewaysComponent } from 'app/pages/clover/gateways/gateways.component';
import { GatewaysDetailsComponent } from 'app/pages/clover/gateways/details/gateways.details.component';

export const routes: Routes = [
  {
    path: 'gateways',
    component: GatewaysComponent,
  },
  {
    path: 'gateways/details/:id',
    component: GatewaysDetailsComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloverRoutingModule {}