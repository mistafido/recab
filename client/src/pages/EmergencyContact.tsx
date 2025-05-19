/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonIcon, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { personOutline, phonePortraitOutline, mailOutline, peopleOutline } from "ionicons/icons";
import React, { useState } from "react";
//import { createContacts } from "../services/contactService";
import { useHistory } from "react-router";

const EmergencyContact: React.FC = () => {
    const history = useHistory()
    const [contact1, setContact1] = useState({
      riderId: "67b1e06f743dc292d8212829",
      name: "",
      relationship: "",
      email: "",
      phoneNumber: "",
    });
    const [contact2, setContact2] = useState({
      riderId: "67b1e06f743dc292d8212829",
      name: "",
      relationship: "",
      email: "",
      phoneNumber: "",
    });
    
  const handleSave = async () => {
    const formData = [contact1, contact2];  
    console.log("Saved Contacts:", formData);
    // const response = await createContacts(formData)
    // console.log(response)
    // alert("Emergency contacts saved successfully!")
    history.push("/index")
    }

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Add Emergency Contact</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonText>
            <p>
              To ensure quick reach-out, please add family or friends to contact
              in case of an emergency
            </p>
          </IonText>
          {/*Contact 1*/}
          <IonText>
            <h2>Contact 1</h2>
          </IonText>
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
              placeholder="Enter Name"
              value={contact1.name}
              onIonChange={(e) =>
                setContact1({ ...contact1, name: e.detail.value! || "" })
              }
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
            <IonIcon icon={peopleOutline} style={{ paddingRight: "20px" }} />
            <IonInput
              placeholder="Enter Relationship"
              value={contact1.relationship}
              onIonChange={(e) =>
                setContact1({
                  ...contact1,
                  relationship: e.detail.value! || "",
                })
              }
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
              placeholder="Enter email"
              value={contact1.email}
              onIonChange={(e) =>
                setContact1({
                  ...contact1,
                  email: e.detail.value! || "",
                })
              }
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
              icon={phonePortraitOutline}
              style={{ paddingRight: "20px" }}
            />
            <IonInput
              placeholder="Enter Phone"
              value={contact1.phoneNumber}
              onIonChange={(e) =>
                setContact1({ ...contact1, phoneNumber: e.detail.value! || "" })
              }
            />
          </IonItem>
          {/*Contact 2*/}
          <IonText>
            <h2>Contact 2</h2>
          </IonText>
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
              placeholder="Enter Name"
              value={contact2.name}
              onIonChange={(e) =>
                setContact2({ ...contact2, name: e.detail.value! || "" })
              }
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
            <IonIcon icon={peopleOutline} style={{ paddingRight: "20px" }} />
            <IonInput
              placeholder="Enter Relationship"
              value={contact2.relationship}
              onIonChange={(e) =>
                setContact2({
                  ...contact2,
                  relationship: e.detail.value! || "",
                })
              }
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
              placeholder="Enter email"
              value={contact2.email}
              onIonChange={(e) =>
                setContact2({
                  ...contact2,
                  email: e.detail.value! || "",
                })
              }
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
              icon={phonePortraitOutline}
              style={{ paddingRight: "20px" }}
            />
            <IonInput
              placeholder="Enter Phone"
              value={contact2.phoneNumber}
              onIonChange={(e) =>
                setContact2({ ...contact2, phoneNumber: e.detail.value! || "" })
              }
            />
          </IonItem>
          {/*Save Button*/}
          <IonButton
            expand="block"
            color="warning"
            style={{
              marginTop: "30px",
              borderRadius: "50px",
            }}
            onClick={handleSave}
          >
            Save Contact
          </IonButton>
        </IonContent>
      </IonPage>
    );
}

export default EmergencyContact;