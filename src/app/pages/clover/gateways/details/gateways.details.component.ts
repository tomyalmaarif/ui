import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GatewaysService } from 'app/common/services/gateways/gateways.service';
import { NotificationsService } from 'app/common/services/notifications/notifications.service';
import { Service } from 'app/pages/clover/gateways/details/services/services.interface'
import { Gateway } from 'app/common/interfaces/gateway.interface';
import { Message } from 'app/common/interfaces/mainflux.interface';


import { MqttManagerService } from 'app/common/services/mqtt/mqtt.manager.service';

@Component({
  selector: 'ngx-details-component',
  templateUrl: './gateways.details.component.html',
  styleUrls: ['./gateways.details.component.scss'],
})
export class GatewaysDetailsComponent implements OnInit, OnDestroy {
  gateway: Gateway = {
    name: '',
    metadata: {},
  };

  services: Service[]
  mfxAgent = true;

  constructor(
    private route: ActivatedRoute,
    private gatewaysService: GatewaysService,
    private notificationsService: NotificationsService,
    private mqttManagerService: MqttManagerService,
  ) { }

  ngOnInit() {

    const mcSub = this.mqttManagerService.messageChange.subscribe(
      (message: Message) => {
        this.services = <Service[]>JSON.parse(message.vs.toString())
        console.log(message.vs)
      },
    );

    const id = this.route.snapshot.paramMap.get('id');
    this.gatewaysService.getGateway(id).subscribe(
      gw => {
        this.gateway = <Gateway>gw;
        if (this.mfxAgent) {
          this.mqttManagerService.init(
            this.gateway.id,
            this.gateway.key,
            this.gateway.metadata.ctrlChannelID,
          );
        }
      },
      err => {
        this.notificationsService.error('Failed to fetch gateway',
          `Error: ${err.status} - ${err.statusText}`);
      },
    );
  }

  ngOnDestroy() {
    if (this.mfxAgent) {
      this.mqttManagerService.disconnect();
    }
  }
}
