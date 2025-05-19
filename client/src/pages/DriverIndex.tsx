import React from "react";
import { IonContent, IonPage, IonButton, IonText, IonImg } from "@ionic/react";
import "./DriverIndex.css";

const DriverIndex: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding welcome-content" fullscreen>
        <div className="logo-container">
          <IonImg src="/assets/logo.png" alt="reCab Logo" className="logo" />
        </div>

        <IonText className="welcome-text">
          <h1>Welcome</h1>
          <p>
            Drive With Us
            <br />
            Earn For You
          </p>
        </IonText>

        <div className="button-group">
          <IonButton expand="block" className="sign-in-button">
            Sign In
          </IonButton>
          <IonText className="create-account-link">Create An Account</IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DriverIndex;
