import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import ProfileToolbar from '../components/ProfileToolbar';
import ProfilePhoto from '../assets/profile.png';
import './Profil.css';

const Profil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <ProfileToolbar />
          <IonTitle>Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <img src={ProfilePhoto} className='profilePhoto'></img>
          <h4 className='desc'>Gerald Nicholas Chandra</h4>
          <h4 className='desc'>00000041041</h4>
          <IonButtons className='socialButtons'>
            <IonButton fill='solid' color='secondary' className='instagramButton' href='https://www.instagram.com/geraldnic/'>Instagram</IonButton>
            <IonButton fill='solid' color='primary' className='linkedinButton' href='https://www.linkedin.com/in/gerald-nicholas-b13413202/'>LinkedIn</IonButton>
          </IonButtons>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profil;