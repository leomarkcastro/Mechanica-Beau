import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonCardHeader, IonCardTitle, IonCard, IonCardSubtitle, IonList, IonItem, IonIcon, useIonPopover, IonButtons, IonButton, IonBackButton } from '@ionic/react';
import { closeCircleOutline, informationCircleOutline, menuOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';

import style from "./LessonList.module.css"

const llData = {
    dynamic : {
        title: "Dynamic Pumps",
        tabs: [
            {
                title: "Centrifugal Pumps",
                description: "A machine, which the pumping action is accomplish by imparting kinetic energy to the fluid by a high-speed revolving impeller",
                link: "/lessons/view/centrifugal"
            },
            {
                title: "Centripetal Pumps",
                description: "The Centripetal Pump (also called an impeller) is a cylindrical disk with multiple channels.",
                link: "/lessons/view/centripetal"
            },
            {
                title: "Submersible Pumps",
                description: "A submersible pump is a mechanical equipment that works by pushing the water toward the surface instead of pulling it.",
                link: "/lessons/view/submersible"
            },
        ],
    },
    positive: {
        title: "Positive Displacement",
        tabs: [
            {
                title: "Reciprocating Pumps",
                description: "Reciprocating is a positive displacement unit wherein the pumping action is accomplished by the forward and backward movement of a piston or plunger inside a cylinder usually provided with valves.",
                link: "/lessons/view/reciprocating"
            },
            {
                title: "Plunger Pumps",
                description: "Plunger Pumps are positive displacement devices ideal for pumping a range of liquids—even liquids with high levels of solid content.",
                link: "/lessons/view/plunger"
            },
            {
                title: "Diaphragm Pumps",
                description: "Diaphragm Pumps are versatile and can handle a large number of liquids, including dry food powders, wastewater, additives, pharmaceuticals, and chemicals.",
                link: "/lessons/view/diaphragm"
            },
            {
                title: "Piston Pumps",
                description: "Piston Pumps is a simple and powerful device. It has a piston, a chamber, casing, and a series of control units.",
                link: "/lessons/view/piston"
            },
            {
                title: "Hand Pumps",
                description: "Hand pumps are manually operated pumps; they use human power and mechanical advantage to move fluids or air from one place to another.",
                link: "/lessons/view/hand"
            },
            {
                title: "Rotary Pumps",
                description: "The rotary pump's rotor rotates or replaces the fluid by orbiting and rotatory movement.",
                link: "/lessons/view/rotary"
            },
            {
                title: "Rotary Lobe Pumps",
                description: "The rotor of this type of pump does not touch the housing during its working.",
                link: "/lessons/view/rotlob"
            },
            {
                title: "Flexible Impeller Pumps",
                description: "A flexible impeller pump is a type of pump design which consists of a circular rubber impeller with several flexible rubber vanes mounted within a casing.",
                link: "/lessons/view/flex"
            },
            {
                title: "Sliding Vane Pumps",
                description: "Sliding Vane Pumps are ideally suited for a wide array of markets, including chemical process, energy, transport, military & marine, general industry, and oil & gas.",
                link: "/lessons/view/slide"
            },
            {
                title: "Pneumatic Pumps",
                description: "Pneumatic has been performed a vital role in mechanical work as technology for a long time. This technology is also used to develop robotics solutions.",
                link: "/lessons/view/pneu"
            },
        ],
    }
}

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

function LessonList({ match }) {

    const his = useHistory()
    const pageData = llData[match.params.title]

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
            <IonButtons slot="start">
                <IonBackButton defaultHref="/start" />
            </IonButtons>
            <IonTitle>Pump Lec and Calc</IonTitle>
            </IonToolbar>
        </IonHeader>
            
            <IonContent className={style.formulaList}>

                <h2 className={style.listLabel}>{ pageData.title }</h2>

                { pageData.tabs.map((e,i) => 
                    <IonCard key={`lss_${i}`} color="tertiary" button routerLink={e.link}>
                        <IonCardHeader>
                            <IonCardTitle>{e.title}</IonCardTitle>
                            <IonCardSubtitle>{e.description}</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                )}


            </IonContent>
            
        </IonPage>
        
    )
    
}

export default LessonList