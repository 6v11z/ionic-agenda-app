import { IonFab, IonFabButton, IonIcon } from "@ionic/react";

import { add } from "ionicons/icons";

import "./FloatingButton.css";

const FloatingButton = ({ ...props }) => {
  return (
    <IonFab {...props}>
      <IonFabButton>
        <IonIcon icon={add} size="large"></IonIcon>
      </IonFabButton>
    </IonFab>
  );
};

export default FloatingButton;
