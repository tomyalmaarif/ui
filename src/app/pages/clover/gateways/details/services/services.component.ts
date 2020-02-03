import { Component, Input } from '@angular/core';
import { GatewaysService } from 'app/common/services/gateways/gateways.service';
import { NotificationsService } from 'app/common/services/notifications/notifications.service';
import { MqttManagerService } from 'app/common/services/mqtt/mqtt.manager.service';
import { Service } from 'app/pages/clover/gateways/details/services/services.interface'
import { Message } from 'app/common/interfaces/mainflux.interface';

import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'ngx-services-info',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})

export class ServicesComponent  {
  offset = 0;
  limit = 20;
  total = 0;
  services: Service[];

  source: LocalDataSource = new LocalDataSource();

  settings = {
    
    actions: {
        add: false,
        edit: false,
        delete: false,
      },
  
    columns: {
      Name: {
        title: 'Name',
        type: 'text',
        placeholder: 'Search name',
        editable: false,
        filter: false,
      },
      LastSeen: {
        title: 'Last Seen',
        type: 'text',
        placeholder: 'Search name',
        editable: false,
        filter: false,
      },
      Status: {
        title: 'Status',
        type: 'text',
        placeholder: 'Search name',
        editable: false,
        filter: false,
      },
      Command:{
          title: 'Command',
          type: 'text',
          editable: false,
          filter: false,
          placeholder: 'Search name',
          valuePrepareFunction: (cell, row) => {
            if (row.Name != 'adc' ) {
              return "Run";
            }
            return 'None';
          },
      },
     
    },
    pager: {
      display: true,
      perPage: 6,
    },
  };

  constructor(
    private gatewaysService: GatewaysService,
    private notificationsService: NotificationsService,
    private mqttManagerService: MqttManagerService,
  ) { 
    const mcSub = this.mqttManagerService.messageChange.subscribe(
        (message: Message) => {
          this.services = []
          var s =[];
          s = <Service[]>JSON.parse(message.vs.toString())
          var el
          for (let el of s ){
              this.services.push(el)
          }
          this.source.load(this.services)
          this.source.refresh()
        },
      );
  
  }

  
}
