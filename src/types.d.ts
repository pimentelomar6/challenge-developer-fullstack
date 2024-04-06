export interface Service {
    id: number;
    name: string;
    description: string;
    category: string;
  }

  export interface Slot {
    date: string;
    serviceId: number;
    availableTimeslots: string[];
  }

  export interface Booking {
    hour: string,
    date: string
  } 
  export interface Information{
    booking: Booking,
    selectedService: Service | null
  }


export type ServiceId = Pick<Service, 'id'>

export type ServiceName = Pick<Service, 'name'>
export type ServiceDescription = Pick<Service, 'description'>
export type ServiceCategory = Pick<Service, 'category'>

export type ListOfServices = Service[]

