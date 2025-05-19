import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonInput,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonText,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,

} from "@ionic/react";
import {
  personOutline,
  mailOutline,
  lockClosedOutline,
  logoGoogle,
  logoFacebook,
  arrowBackOutline,
} from "ionicons/icons";
// import { registerUser } from "../services/authService";
import { useHistory } from "react-router";
import swal from "sweetalert";
//import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  

   const handleRegister = async () => {
     try {
      //  const formData = { username, email, password };
      //  console.log(formData);
      //  const response = await registerUser(formData);
      //  console.log(response);
      //  swal("Registration Successful!");
       history.push("/otp")
       //navigate("/otp")
     } catch (error) {
       console.log(error);
       swal("Incorrect Username or Password");
     }
   };
    return (
      <IonPage>
        <IonHeader style={{ backgroundColor: "green", color: "white" }}>
          <div
            style={{
              textAlign: "left",
              margin: "10px 20px",
              padding: "0px",
              fontWeight: "light",
            }}
          >
            <IonIcon
              slot="start"
              icon={arrowBackOutline}
              style={{ paddingLeft: "20px" }}
            />
          </div>
        </IonHeader>
        <IonContent
          className="ion-padding"
          style={{ backgroundColor: "white" }}
        >
          <IonToolbar style={{ textAlign: "center", margin: "10px 0" }}>
            <IonTitle
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "10px 0",
              }}
            >
              REGISTRATION
            </IonTitle>
          </IonToolbar>

          {/* Registration Form */}
          <IonItem
            lines="none"
            style={{
              marginTop: "20px",
              border: "1px solid #ccc",
              borderRadius: "25px",
            }}
          >
            <IonIcon icon={personOutline} style={{ paddingRight: "20px" }} />
            <IonInput
              type="text"
              value={username}
              onIonChange={(e) => setUsername(e.detail.value || "")}
              placeholder="Enter your username"
              style={{ padding: "5px" }}
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
            <IonIcon icon={mailOutline} style={{ paddingRight: "20px" }} />
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value || "")}
              placeholder="Enter your email"
              style={{ padding: "5px" }}
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
              onIonChange={(e) => setPassword(e.detail.value || "")}
              placeholder="Enter your password"
              style={{ padding: "5px" }}
              required
            />
          </IonItem>

          <IonButton
            expand="block"
            color="warning"
            style={{
              marginTop: "30px",
              borderRadius: "50px",
            }}
            onClick={handleRegister}
          >
            Register
          </IonButton>

          {/* OR Section */}
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <IonText color="medium">Or continue with</IonText>
          </div>

          {/* Social Login Buttons */}
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

          {/* Login Link */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <IonText>
              <p style={{ color: "#888" }}>
                Already have an account?{" "}
                <IonText color="primary">
                  <a href="/login" style={{ textDecoration: "none" }}>
                    Login
                  </a>
                </IonText>
              </p>
            </IonText>
          </div>
        </IonContent>
      </IonPage>
    );
}

export default Register;