export interface EventItem{
    eventId: string;
    eventName: string;
    eventDescription: string;
    scheduleStart: string;
    scheduleEnd: string;
    eventStartDate: string;
    eventEndDate: string;
}

export interface UserEventProgrammingDTO {
    inscriptionId: string;
    inscriptionStatus: string;
    studentName: string;
    total: string;
    createdAt: string;
    items: EventItem[];
  }