import { CalendarService } from '../../../core/services/calendar.service';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FullCalendarModule } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: esLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    buttonText: {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Día'
    },
    eventColor: '#FF9220', // Naranja para eventos
    eventTextColor: '#FFFFFF', // Texto de eventos en blanco
    dayMaxEvents: true, // Mostrar varios eventos en un día
    height: 'auto', // Ajusta automáticamente la altura
    events: [] // Inicializa los eventos como un arreglo vacío
  };

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.calendarService.getUserEvents()
      .pipe(
        catchError((error) => {
          console.error('Error loading events:', error);
          return of([]); // Retorna un arreglo vacío en caso de error
        })
      )
      .subscribe((data) => {
        console.log('Data received from server:', data);
  
        const events = data.flatMap(event =>
          event.items.map(item => ({
            title: item.eventDescription,
            start: `${item.eventStartDate}T${item.scheduleStart}`, // Fecha de inicio en formato ISO
            end: `${item.eventEndDate}T${item.scheduleEnd}`,       // Fecha de fin en formato ISO
            color: '#FF9220', // Naranja para cada evento individualmente
            textColor: '#FFFFFF' // Texto en blanco
          }))
        );
        this.calendarOptions = { ...this.calendarOptions, events: events };
      });
  }
}
