import { Component, OnInit } from '@angular/core';
import { ClientsApiService } from '../../services/clients-api.service';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})

export class ClientsTableComponent implements OnInit {

  constructor(private clientsApi: ClientsApiService) { }

  clients: Array<ClientData> = [];
  client_status: Array<string> = [];
  counter: number;

  ngOnInit(): void {
    this.clientsApi.getClients().subscribe(
      data => {
        for(this.counter = 0; this.counter < Object.keys(data.clientes).length; this.counter++) {
          this.clients.push(data.clientes[Object.keys(data.clientes)[this.counter]]);
          this.clients[this.clients.length - 1]['index'] = this.counter;
          this.client_status.push(this.clients[this.clients.length - 1]['status']);
        }
      },
      error => { console.log(error) });
  }

  changeClientStatus(event, index) {
    this.client_status[index] = event;

    this.clientsApi.setNewStatus(this.clients[index]['cpf'], event).subscribe(
      data => { },
      error => { console.log(error) });
  }
}
