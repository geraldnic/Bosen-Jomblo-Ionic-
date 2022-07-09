import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';
import { closeOutline, heart, share, trash } from 'ionicons/icons';
import { useContext, useState } from 'react';
import ProfileToolbar from '../components/ProfileToolbar';
import CrushesContext from '../data/crush-context';
import './Target.css';

const Target: React.FC = () => {
  const crushesCtx = useContext(CrushesContext);
  const [present, dismiss] = useIonActionSheet();
  const [contentValue, setContentValue] = useState(false);

  const deleteTargetHandler = (targetId: string) => {
    crushesCtx.deleteTarget(targetId);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <ProfileToolbar />
          <IonTitle>Target Gebetan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      {!crushesCtx.targets.length  && (
        <>
          <h4 className='introTitle'>Anda masih jones ??</h4>
          <IonButtons>
            <IonButton routerLink={"/home"} routerDirection="none" className='cariButton'>Cari Gebetan</IonButton>
          </IonButtons>
        </>
        )}
      {crushesCtx.targets.map(target => (
        <IonItemSliding key={target.id}>
        <IonItemOptions side="end">
          <IonItemOption color="danger" onClick={() => 
          present({
            buttons: [
              {text: 'Yakin, hapus dari daftar',
              handler: () => deleteTargetHandler(target.id), 
              icon: trash
              },
              {text: 'Gak yakin, kembali',
              role:'cancel',
              icon: share
              }],
            header: 'Yakin gak gebet dia lagi?'
          })}>
            <IonIcon slot="icon-only" icon={closeOutline}/>
          </IonItemOption>
        </IonItemOptions>
        <IonItem key={target.id} 
          lines="full" 
          button
          >
          <IonGrid>
            <IonRow>
              <IonCol size='4' className='avatarGrid'>
                <IonAvatar className='avatarList'>
                <img src={target.photo} />
                </IonAvatar>
              </IonCol>
              <IonCol size='8'>
                <h3>{target.name}</h3>
                <p>{target.description}<br />{target.gender}</p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonItemSliding>
      ))}
      </IonContent>
    </IonPage>
  );
};

export default Target;