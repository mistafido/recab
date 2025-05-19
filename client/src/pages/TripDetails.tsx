import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import axios from "axios";
import { arrowBack, locationOutline, pinOutline, shareOutline, timeOutline, carOutline } from "ionicons/icons";
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom"

interface LocationState {
  data?: any[];
  cabNumber?: string;
}

interface Driver {
  name: string;
  phonenumber: number;
  email: string;
  cabNumber: string;
  address: string;
}

const TripDetails: React.FC = () => {
  const [driver, setDriver] = useState<Driver | null>(null)
  const location = useLocation<LocationState>();
  const state = location.state as LocationState || {}
  const data = state.data || []
  //const data = location.state || { data: [] }
  console.log(data)
  const labels = ["Current Location", "Destination Location", "Cab Number"];
  const icons = [locationOutline, pinOutline, carOutline];
  const cabNumber = location.state?.cabNumber
  // console.log(cabNumber)

  useEffect(() => {
    const fetchDriver = async () => {
      const cabNumber = location.state?.cabNumber;
      console.log(cabNumber);
      if (!cabNumber) {
        console.log("cabNumber is undefined")
        return;
      }
      try {
        const response = await axios.post(`http://localhost:5000/api/drivers/get_driver/${cabNumber}`);
        console.log("Driver fetched:", response.data) //debug log
        setDriver(response.data)
        console.log(driver)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDriver()
  }, [cabNumber]);
    return (
      <IonPage>
        {/*Header with Back Button*/}
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/trip-details" icon={arrowBack} />
            </IonButtons>
            <IonTitle>Trip Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {/*Profile Avatar*/}
          <div className="ion-text-center">
            <IonAvatar
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Profile"
              />
            </IonAvatar>
          </div>

          {/* User Information*/}
          <IonList
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <IonItem>
              <IonLabel>Name</IonLabel>
              <IonText slot="end">Yusuf Amos</IonText>
            </IonItem>
            <IonItem>
              <IonLabel>Phone Number</IonLabel>
              <IonText slot="end">+2348134114447</IonText>
            </IonItem>
            <IonItem>
              <IonLabel>Email</IonLabel>
              <IonText slot="end">driver@mail.com</IonText>
            </IonItem>
            <IonItem>
              <IonLabel>Address</IonLabel>
              <IonText slot="end">No 2 ID Gyang Street</IonText>
            </IonItem>
            {/* <IonItem>
              <IonLabel>reCab number</IonLabel>
              <IonText slot="end">130048</IonText>
            </IonItem> */}
          </IonList>

          {/*Expected Time of Arrival*/}
          <IonItem>
            <IonIcon icon={timeOutline} slot="start" />
            <IonLabel>Expected Time of Arrival</IonLabel>
            <IonText slot="end">30 Min</IonText>
          </IonItem>

          {/*Current Location*/}
          {/* <IonItem>
            <IonIcon icon={locationOutline} slot="start" />
            <IonLabel>Current Location</IonLabel>
            <IonText slot="end">You are here</IonText>
          </IonItem>

          {/*Destination
          <IonItem style={{ marginBottom: "20px"}}>
            <IonIcon icon={pinOutline} slot="start" />
            <IonLabel>Destination</IonLabel>
            <IonText slot="end">data</IonText>
          </IonItem> */}
          {data.length > 0 ? (
            <div>
              {data.map((item, index) => (
                <div key={index}>
                  <IonItem>
                    <IonIcon
                      icon={icons[index] || locationOutline}
                      slot="start"
                    />
                    <IonLabel>{labels[index] || "Additional Info"}</IonLabel>
                    <IonText slot="end">{item}</IonText>
                  </IonItem>
                </div>
              ))}
            </div>
          ) : (
            <p>No data available</p>
          )}
          {/*Share info button*/}
          <IonButton expand="block" color="warning">
            <IonIcon icon={shareOutline} slot="start" />
            Share Info
          </IonButton>
        </IonContent>
      </IonPage>
    );
}

export default TripDetails;