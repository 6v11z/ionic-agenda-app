import { create } from "zustand"

interface Reservation {
  startDate: string;
  startTime: string;
  endTime: string;
  id: number;
}

interface ReservationsState{
  reservations: Reservation[];
  addReservation: (newReservation: Omit<Reservation, 'id'>) => void;
}


export const useReservationsStore = create<ReservationsState>()((set) => ({
  reservations: [],
  addReservation: (newReservation) =>
    set((state) => ({
      reservations: [
        ...state.reservations,
        {
          ...newReservation,
          id: state.reservations.length + 1,
        },
      ],
    })),
}))

