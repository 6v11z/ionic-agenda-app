import { Route } from "react-router";

import { IonPage, IonRouterOutlet } from "@ionic/react";

import UsersListPage from "./UsersList";
import UserDetailPage from "./UserDetail";

const DashboardPage: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path="/dashboard" component={UsersListPage} />
        <Route path="/dashboard/users/:id" component={UserDetailPage} />
      </IonRouterOutlet>
    </IonPage>
  );
};
export default DashboardPage;
