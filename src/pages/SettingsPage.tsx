import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const SettingsPage: React.FC = () => {
  return (
    <>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Ajustes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList inset={true} lines="none">
          <IonItem>
            <IonLabel>Appearence</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>General</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>About</IonLabel>
          </IonItem>
        </IonList>
        <IonButton className="ion-padding" expand="block" color="danger">
          Cerrar Sesión
        </IonButton>
      </IonContent>
    </>
  );
};
export default SettingsPage;
