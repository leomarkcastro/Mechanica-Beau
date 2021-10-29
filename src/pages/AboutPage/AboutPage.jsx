import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonTitle, IonBackButton, IonCardTitle, IonCardHeader, IonCardSubtitle, IonItemDivider, IonItem } from '@ionic/react';

import Logo from "../../components/Logo/Logo"

import style from "./AboutPage.module.css"

function AboutPage() {

    return (
        
        <IonPage>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="home" />
                    </IonButtons>
                    <IonTitle>About Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <IonContent>

                <div className={style.logo}>
                    <Logo className={style.aboutLogo} />
                </div>

                <br/>
                
                
                <IonCardHeader>
                    
                    <IonCardTitle>Version</IonCardTitle>
                    <p>v0.0.1</p>
                    <br/>
                    <IonCardTitle>Developers</IonCardTitle>
                    <p>Wawi Wuwu</p>
                    <p>Wawi Wuwu</p>
                    <p>Wawi Wuwu</p>
                    <p>Wawi Wuwu</p>
                    <p>Wawi Wuwu</p>
                </IonCardHeader>

            </IonContent>
            
        </IonPage>
        
    )
    
}

export default AboutPage