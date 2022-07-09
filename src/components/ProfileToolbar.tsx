import { IonButtons, IonButton, IonIcon } from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";


export const ProfileToolbar = () => {
    return(
    <IonButtons slot="end">
        <IonButton routerLink={"/profil"} routerDirection="none">
            <IonIcon slot="icon-only" icon={personCircleOutline} />
        </IonButton>
    </IonButtons>
    )
}

export default ProfileToolbar;