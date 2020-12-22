import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsApiService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get('https://empresta-hackaton-api.herokuapp.com/get_clients');
  }

  setNewStatus(clientCPF: string, newStatus: string) {
    let headers = new HttpHeaders().set('cpf', clientCPF);
    headers = headers.append('status', newStatus);
    return this.http.get('https://empresta-hackaton-api.herokuapp.com/set_client_status', { headers: headers });
  }
}
