export interface InscriptionCreateUpdateRequest {
    studentId: number;
    total: number;
    items: InscriptionItemCreateUpdateRequest[];
  }
  
  
  export interface InscriptionItemCreateUpdateRequest {
    eventId: number;
    nameEvent: String;
    quantity: number; 
    price: number;
  }
  