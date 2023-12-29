import { useRef, useState } from "react"
import { format, parseISO } from "date-fns"
import { useReservationsStore } from "../store/reservations"

import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react"

import "./NewReservationModal.css"

function getTodayDate() {
  const dateISO = new Date().toISOString()

  const formattedDate = format(parseISO(dateISO), "dd/MM/yyyy")
  const formattedHour = format(parseISO(dateISO), "HH:mm")

  return {
    date: formattedDate,
    time: formattedHour,
  }
}

const NewReserationModal = () => {
  const addReservation = useReservationsStore((state) => state.addReservation)
  const modal = useRef<HTMLIonModalElement>(null)
  const [startDate, setStartDate] = useState(getTodayDate())
  const [endDate, setEndDate] = useState(getTodayDate())

  const handleStartDateChange = (e) => {
    const selectedDateISO = e.detail.value
    const formattedDate = format(parseISO(selectedDateISO), "dd/MM/yyyy")
    const formattedHour = format(parseISO(selectedDateISO), "HH:mm")

    const newDate = {
      date: formattedDate,
      time: formattedHour,
    }

    setStartDate(newDate)
  }

  const handleEndDateChange = (e) => {
    const selectedDateISO = e.detail.value
    const formattedDate = format(parseISO(selectedDateISO), "dd/MM/yyyy")
    const formattedHour = format(parseISO(selectedDateISO), "HH:mm")

    const newDate = {
      date: formattedDate,
      time: formattedHour,
    }

    setEndDate(newDate)
  }

  const confirm = () => {
    const newReservation = {
      startDate: startDate.date,
      startTime: startDate.time,
      endTime: endDate.time,
    }

    console.log(newReservation)
    addReservation(newReservation)
    modal.current?.dismiss()
  }

  return (
    <IonModal ref={modal} trigger="open-modal">
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss()}>
              Cancelar
            </IonButton>
          </IonButtons>
          <IonTitle>Nueva Reserva</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={confirm}>
              Confirmar
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonAccordionGroup>
          <IonAccordion value="date">
            <IonItem lines="full" slot="header">
              <IonLabel>Fecha</IonLabel>
              <div>{startDate.date}</div>
            </IonItem>
            <IonDatetime
              id="start-date"
              slot="content"
              presentation="date"
              size="cover"
              onIonChange={handleStartDateChange}
            ></IonDatetime>
          </IonAccordion>
          <IonAccordion value="start-time">
            <IonItem lines="full" slot="header">
              <IonLabel>Hora Inicio</IonLabel>
              <div>{startDate.time}</div>
            </IonItem>
            <IonDatetime
              slot="content"
              presentation="time"
              size="cover"
              onIonChange={handleStartDateChange}
              hourCycle="h24"
            ></IonDatetime>
          </IonAccordion>
          <IonAccordion value="end-time">
            <IonItem lines="full" slot="header">
              <IonLabel>Hora Termino</IonLabel>
              <div>{endDate.time}</div>
            </IonItem>
            <IonDatetime
              slot="content"
              presentation="time"
              size="cover"
              onIonChange={handleEndDateChange}
              hourCycle="h24"
            />
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonModal>
  )
}
export default NewReserationModal
