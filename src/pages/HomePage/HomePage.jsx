import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonCardHeader, IonCardTitle, IonCard, IonCardSubtitle, IonList, IonItem, IonIcon, useIonPopover, IonButtons, IonButton } from '@ionic/react';
import { closeCircleOutline, informationCircle, informationCircleOutline, menuOutline, trashBinOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';

import style from "./HomePage.module.css"

const PopoverList = ({ onHide, viewAbout }) => {

    return (
        <IonList>
            <IonItem button onClick={viewAbout}><IonIcon icon={informationCircleOutline} slot="start"/> About</IonItem>
            <IonItem lines="none" detail={false} button onClick={onHide}>
                <IonIcon icon={closeCircleOutline} slot="start"/> Close
            </IonItem>
        </IonList>
    );
}


function HomePage() {

    const his = useHistory()

    const gotoAbout = () => {
        pop_dismiss()
        his.push('/about')
    }

    const [pop_present, pop_dismiss] = useIonPopover(PopoverList, { 
        onHide: () => pop_dismiss(), 
        viewAbout: gotoAbout
    });


    return (
        
        <IonPage className={style.mainContent}>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Mechanica Beau</IonTitle>
                    <IonButtons slot="end">
                        <IonButton
                            onClick={(e) =>
                                pop_present({
                                    event: e.nativeEvent,
                                })
                            }
                        >
                            <IonIcon icon={menuOutline} slot="icon-only"/>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            
            <IonContent className={style.formulaList}>

                <div className={style.heroBanner}>
                    <h1>What Should We Learn Today?</h1>
                </div>

                <IonCard className={`animate__animated animate__pulse`} color="success" button routerLink='/home'>
                    <IonCardHeader>
                        <IonCardTitle>Calculator</IonCardTitle>
                        <IonCardSubtitle>Calculate Mechanical Engineering Formulas</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

                <h2 className={style.listLabel}>Lessons</h2>

                <IonCard color="tertiary" button routerLink='/lessons/centrifugal'>
                    <IonCardHeader>
                        <IonCardTitle>Centrifugal Pumps</IonCardTitle>
                        <IonCardSubtitle>A machine, which the pumping action is accomplish by imparting kinetic energy to the fluid by a high-speed revolving impeller</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

                <IonCard color="tertiary" button routerLink='/lessons/reciprocating'>
                    <IonCardHeader>
                        <IonCardTitle>Reciprocating Pumps</IonCardTitle>
                        <IonCardSubtitle>A positive displacement unit wherein the pumping action is accomplished by the forward and backward movement of a piston or plunger inside a cylinder </IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

            </IonContent>
            
        </IonPage>
        
    )
    
}

export default HomePage