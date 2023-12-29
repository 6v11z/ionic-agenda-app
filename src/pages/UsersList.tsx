import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import FloatingButton from "../components/FloatingButton";
import NewReserationModal from "../components/NewReservationModal";

const UsersListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList inset={true} lines="none">
          <IonItem routerLink="/dashboard/users/1">
            <IonLabel>User 1</IonLabel>
          </IonItem>
          <IonItem routerLink="/dashboard/users/2">
            <IonLabel>User 2</IonLabel>
          </IonItem>
          <IonItem routerLink="/dashboard/users/3">
            <IonLabel>User 3</IonLabel>
          </IonItem>
        </IonList>

        <FloatingButton id="open-modal" vertical="bottom" horizontal="end" />
        <NewReserationModal />
      </IonContent>
    </IonPage>
  );
};
export default UsersListPage;
