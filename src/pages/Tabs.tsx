import { Redirect, Route } from "react-router-dom";

import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import {
  calendarNumberSharp,
  calendarSharp,
  homeOutline,
  settingsOutline,
} from "ionicons/icons";

import DashboardPage from "./Dashboard";
import SettingsPage from "./SettingsPage";
import MyReservationsPage from "./MyReservations";

import "./Tabs.css";

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Redirect exact path="/" to="/dashboard" />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/my-reservations" component={MyReservationsPage} />
      <Route exact path="/settings" component={SettingsPage} />
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="dashboard" href="/dashboard">
        <IonIcon icon={calendarNumberSharp} />
        <IonLabel>Dashboard</IonLabel>
      </IonTabButton>
      <IonTabButton tab="my-reservations" href="/my-reservations">
        <IonIcon icon={calendarSharp} />
        <IonLabel>Mis Reservas</IonLabel>
      </IonTabButton>
      <IonTabButton tab="settings" href="/settings">
        <IonIcon icon={settingsOutline} />
        <IonLabel>Ajustes</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
