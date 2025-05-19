import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonInput,
  IonButtons,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonToolbar,
    IonBackButton,
    IonTitle
} from "@ionic/react";
import './OTP.css';
import { useHistory } from "react-router-dom"


const OTP: React.FC = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const history = useHistory()
    
    const handleKeypadClick = (num: string) => {
        const newOtp = [...otp];
        const emptyIndex = newOtp.findIndex((val) => val === "");
        if (emptyIndex !== -1) {
            newOtp[emptyIndex] = num;
            setOtp(newOtp)
        }
        console.log(otp)
        history.push('/emergency-contact')
    }

    const handleBackSpace = () => {
        const newOtp = [...otp];
        for (let i = newOtp.length - 1; i >= 0; i--){
            if (newOtp[i] !== "") {
                newOtp[i] = "";
                break;
            }
        }
        setOtp(newOtp)
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>Enter your code</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonText>
            <p>A code was sent to your@mail.com</p>
          </IonText>

          {/*OTP Input Fields */}
          <IonGrid>
            <IonRow className="otp-container">
              {otp.map((digit, index) => (
                <IonCol key={index} className="otp-box">
                  <IonInput value={digit} readonly />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>

          {/* Resend Code*/}
          <IonButton fill="clear">Resend Code</IonButton>

          {/*Numeric Keypad*/}
          <IonGrid className="keypad">
            {[
              ["1", "2", "3"],
              ["4", "5", "6"],
              ["7", "8", "9"],
              ["0", "⌫"],
            ].map((row, rowIndex) => (
              <IonRow key={rowIndex}>
                {row.map((key) => (
                  <IonCol key={key}>
                    <IonButton
                      style={{
                        marginTop: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "25px",
                      }}
                      onClick={() =>
                        key === "⌫" ? handleBackSpace() : handleKeypadClick(key)
                      }
                    >
                      {key}
                    </IonButton>
                  </IonCol>
                ))}
              </IonRow>
            ))}
          </IonGrid>
        </IonContent>
      </IonPage>
    );
}

export default OTP;