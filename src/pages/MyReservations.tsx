import { useReservationsStore } from "../store/reservations"

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react"

const MyReservationsPage: React.FC = () => {
  const reservations = useReservationsStore((state) => state.reservations)

  return (
    <>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Mis Reservas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {reservations.map((reservation, index) => (
          <IonCard key={reservation.id}>
            <IonCardHeader>
              <IonCardTitle>Reserva N°{index + 1}</IonCardTitle>
              <IonCardSubtitle>
                {reservation.startDate}
                {` (${reservation.startTime} - ${reservation.endTime})`}
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </>
  )
}

export default MyReservationsPage
