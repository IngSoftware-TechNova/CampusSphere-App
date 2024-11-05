import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { EventDetailsResponse } from '../../shared/models/event-details-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseURL = `${environment.baseURL}/admin/events`;
  private http = inject(HttpClient);

  getEventDetails(): Observable<EventDetailsResponse[]> {
    return this.http.get<EventDetailsResponse[]>(`${this.baseURL}`);
  }


  getEventDetailsById(id: number): Observable<EventDetailsResponse> {
    return this.http.get<EventDetailsResponse>(`${this.baseURL}/${id}`);
  }
}
