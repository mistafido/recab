import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonToolbar } from "@ionic/react";
import { locationOutline, personOutline, searchOutline } from "ionicons/icons";
import React, { //useEffect, 
    useState
} from "react";
import { useHistory } from "react-router-dom";
//run npm install @capacitor/geolocation
//import { Geolocation } from "@capacitor/geolocation"

const Index: React.FC = () => {
    const [location, setLocation] = useState("")
    const [destination, setDestination] = useState("")
    const [cabNumber, setCabNumber] = useState("")
    const history = useHistory()

    // const mapRef = useRef<HTMLDivElement | null>(null);
    // const [map, setMap] = useState<google.maps.Map | null>(null);
    // const [marker, setMarker] = useState<google.maps.AdvancedMarkerElement | null>(null)

    // useEffect(() => {
    //     loadMap();
    // }, [])

    // const loadMap = async () => {
    //   if (!window.google) {
    //     console.error("Google Maps not Loaded");
    //     return;
    //   }

    //   //get user's current position
    //   const coordinates = await Geolocation.getCurrentPosition();
    //   const [latitude, longitude] = coordinates.coords;

    //   //initialize google map
    //   const newMap = new google.maps.Map(mapRef.current as HTMLDivElement, {
    //     center: { lat: latitude, lng: longitude },
    //     zoom: 15,
    //   });

    //   //add marker at current location
    //   const newMarker = new google.maps.Marker({
    //     position: { lat: latitude, lng: longitude },
    //     map: newMap,
    //     title: "Your Location",
    //   });
      
    //     setMap(newMap);
    //     setMarker(newMarker)
    // }

    const handleContinue = () => {
      //console.log(location, destination, driverId);
      //const data = [location,destination,cabNumber]
      history.push("/trip-details", {location: location, destination: destination, cabNumber: cabNumber})
    };
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonMenuButton slot="start" />
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <div
            id="map-container"
            style={{ height: "50vh", width: "100%", backgroundColor: "#ddd" }}
          >
            Google Map
          </div>

          <IonItem
            lines="none"
            style={{
              marginTop: "20px",
              border: "1px solid #ccc",
              borderRadius: "25px",
            }}
          >
            <IonIcon icon={locationOutline} slot="start" />
            <IonInput
              placeholder="Current Location"
              value={location}
              onIonChange={(e) =>
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                setLocation(e.detail.value! || "")
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
            <IonIcon icon={searchOutline} slot="start" />
            <IonInput
              placeholder="Where to"
              value={destination}
              onIonChange={(e) =>
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                setDestination(e.detail.value! || "")
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
            <IonIcon icon={personOutline} slot="start" />
            <IonInput
              placeholder="Input Cab Number"
              value={cabNumber}
              onIonChange={(e) =>
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                setCabNumber(e.detail.value! || "")
              }
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
            onClick={handleContinue}
          >Continue</IonButton>
        </IonContent>
      </IonPage>
    );
}

export default Index;