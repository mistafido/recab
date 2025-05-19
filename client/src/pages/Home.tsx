import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from "react-router-dom"

import './Home.css';

const Home: React.FC = () => {
  const navigate = useHistory()
  const navigateToLogin = () => {
    navigate.push('/login')
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="container">
          <strong onClick={navigateToLogin}>reCab</strong>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
