import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonIcon,
    IonToggle,
    IonButtons,
    IonButton,
  } from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";
  import React from "react";

  export const Menu = () => {
    const toggleDarkModeHandler = () => {
      document.body.classList.toggle("dark");
    };
    return (
      <IonMenu side="start" contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Gebet App</IonTitle>
          </IonToolbar>
      </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle auto-hide="false">
              <IonItem lines="none" className="menuItem homeItem" button routerLink={"/home"} routerDirection="none">
                <IonLabel>Daftar Calon Pasangan</IonLabel>
              </IonItem>
              <IonItem lines="none" className="menuItem" button routerLink={"/target"} routerDirection="none">
                <IonLabel>Target Pasangan</IonLabel>
              </IonItem>
              <IonItem lines="none" className="menuItem" button routerLink={"/profil"} routerDirection="none">
                <IonLabel>Profile</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonItem lines="none" className="menuItem" button>
              <IonLabel>Welcome to Dark Theme</IonLabel>
              <IonToggle 
              onIonChange={toggleDarkModeHandler}/>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };