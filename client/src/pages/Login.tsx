/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {useState} from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonInput,
  IonButton,
  IonItem,
  IonText,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";


import {
  mailOutline,
  lockClosedOutline,
  logoGoogle,
  logoFacebook,
} from "ionicons/icons";

import swal from 'sweetalert'
import { chevronForward } from "ionicons/icons";
import { loginUser } from "../services/authService";


const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const formData = { email, password }
      console.log(formData)
      const response = await loginUser(formData)
      console.log(response)
      swal("Login Successful!")
    }
    catch (error) {
      console.log(error)
      swal("Incorrect Username or Password");
    }
  }
    return (
      <IonPage ion-color-warning>
        <IonHeader style={{ backgroundColor: "green", color: "white" }}>
          <div
            style={{
              textAlign: "left",
              margin: "10px 20px",
              padding: "0px",
              fontWeight: "light",
            }}
          >
            <IonText>
              <h6 style={{ color: "white" }}>Hello, </h6>
            </IonText>
            <IonText color="primary">
              <h1 style={{ color: "white" }}>Welcome Back</h1>
            </IonText>
          </div>
        </IonHeader>
        <IonContent
          className="ion-padding"
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <IonToolbar style={{ textAlign: "center", margin: "10px 0" }}>
            <IonTitle
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "10px 0",
              }}
            >
              LOGIN
            </IonTitle>
          </IonToolbar>
          <IonItem
            lines="none"
            style={{ border: "1px solid #ccc", borderRadius: "25px" }}
          >
            <IonIcon icon={mailOutline} style={{ paddingRight: "20px" }} />
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value! || " ")}
              placeholder="Email Address"
              style={{ paddingLeft: "20px" }}
              required
            />
          </IonItem>
          <IonItem
            lines="none"
            style={{
              marginTop: "20px",
              border: "1px solid #ccc",
              borderRadius: "25px",
            }}
          >
            <IonIcon
              icon={lockClosedOutline}
              style={{ paddingRight: "20px" }}
            />
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value! || "")}
              placeholder="Password"
              style={{ paddingLeft: "20px" }}
              required
            />
          </IonItem>
          <IonButton
            color="warning"
            expand="block"
            style={{
              marginTop: "30px",
              padding: "10px",
              justifyContent: "center",
              borderRadius: "30px",
            }}
            onClick={handleLogin}
          >
            Login
            <IonIcon
              icon={chevronForward}
              style={{ fontSize: "24px", color: "black" }}
              slot="end"
            />
          </IonButton>
          {/* OR Section */}
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <IonText color="medium"> - Or continue with - </IonText>
          </div>

          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="auto">
                <IonButton
                  color="light"
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IonIcon icon={logoGoogle} size="large" />
                </IonButton>
              </IonCol>
              <IonCol size="auto">
                <IonButton
                  color="light"
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IonIcon icon={logoFacebook} size="large" />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>

          {/* Create account Link*/}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <IonText>
              <p style={{ color: "#888" }}>
                New user?{" "}
                <IonText color="primary">
                  <a href="/register" style={{ textDecoration: "none" }}>
                    Create an account
                  </a>
                </IonText>
              </p>
            </IonText>
          </div>
        </IonContent>
      </IonPage>
    );
}

export default Login;