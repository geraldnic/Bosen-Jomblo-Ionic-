import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import { useContext, useState } from 'react';
import CrushesContext from '../data/crush-context';
import {heart, personCircleOutline} from "ionicons/icons";

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.css';
import SwiperCore, {Pagination} from 'swiper';
import './swiper-bundle.css';
import ProfileToolbar from '../components/ProfileToolbar';

SwiperCore.use([Pagination]);

const Home: React.FC = () => {
  const crushesCtx = useContext(CrushesContext);

  const [present, dismiss] = useIonLoading();

  const addTargetHandler = (crushId: string) => {
    present({
      message: 'Loading...',
      duration: 1500,
    });
    crushesCtx.addTarget(crushId);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <ProfileToolbar />
          <IonTitle>Bosen Jomblo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Swiper id='main' pagination slidesPerView={3} spaceBetween={25}>
          {crushesCtx.crushes.map(crush => (
          <SwiperSlide key={crush.id}>
            <IonCard className='avatarCard'> 
              <IonCardHeader>
                <IonAvatar className='mid'>
                  <img src={crush.photo} />
                </IonAvatar>
              </IonCardHeader>
              <IonCardContent className='mid'>
                {crush.name}
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          ))}
        </Swiper>
        <IonList>
          {crushesCtx.crushes.map(crush => (
            <IonItemSliding key={crush.id}>
              <IonItemOptions side="end">
                <IonItemOption color="secondary" onClick={addTargetHandler.bind(null, crush.id)}>
                  <IonIcon slot="icon-only" icon={heart}/>
                </IonItemOption>
              </IonItemOptions>
              <IonItem key={crush.id} 
                lines="full" 
                button
                >
                <IonGrid>
                  <IonRow>
                    <IonCol size='4' className='avatarGrid'>
                      <IonAvatar className='avatarList'>
                      <img src={crush.photo} />
                      </IonAvatar>
                    </IonCol>
                    <IonCol size='8'>
                      <h3>{crush.name}</h3>
                      <p>{crush.description}<br />{crush.gender}</p>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
