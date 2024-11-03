import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventDetails } from '../../shared/models/event-details.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseURL = `${environment.baseURL}/events`; // Ajusta la URL base según tu configuración

  constructor(private http: HttpClient) {}

  //Método para obtener los 8 eventos más recientes
  getRecentEvents(): Observable<EventDetails[]> {
    return this.http.get<EventDetails[]>(`${this.baseURL}/recent`);
  }
}
