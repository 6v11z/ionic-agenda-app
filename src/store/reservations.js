import { create } from "zustand"

export const useReservationsStore = create((set) => ({
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

