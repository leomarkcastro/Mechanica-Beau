import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonCardSubtitle,
  IonButtons,
  IonBackButton,
  IonCardContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";

import style from "./style.module.css";

const folder = [
  {
    count: 24,
    folder: "centrifugal",
    title: "Centrifugal Pumps",
  },
  {
    count: 13,
    folder: "diaphragm",
    title: "Diaphragm Pumps",
  },
  {
    count: 30,
    folder: "flex_impeller",
    title: "Flexible Impeller Pumps",
  },
  {
    count: 3,
    folder: "oscillating",
    title: "Oscillating Pumps",
  },
  {
    count: 4,
    folder: "sliding_vane",
    title: "Sliding Vane Pumps",
  },
];

function PumpsList() {
  const [showing, setShowing] = useState(0);

  useEffect(() => {
      setTimeout(() => {
        //window.scrollTo(0, 0);
        scrollToBottom()
        console.log('yo')
      }, 1000)
  }, [showing])

  const messagesEnd = useRef()

    const scrollToBottom = () => {
        messagesEnd.current && messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    }

  return (
    <IonPage className={style.mainContent}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/start" />
          </IonButtons>
          <IonTitle>Pump Lec and Calc</IonTitle>
        </IonToolbar>
        <IonItem>
          <IonLabel>Pump Types</IonLabel>
          <IonSelect
            value={showing}
            placeholder="Select One"
            onIonChange={(e) => setShowing(e.detail.value)}
          >
            <IonSelectOption value={0}>Centrifugal Pumps</IonSelectOption>
            <IonSelectOption value={1}>Diaphragm Pumps</IonSelectOption>
            <IonSelectOption value={2}>Flexible Impeller Pumps</IonSelectOption>
            <IonSelectOption value={3}>Oscillating Pumps</IonSelectOption>
            <IonSelectOption value={4}>Sliding Vane Pumps</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonHeader>

      <IonContent>
          
        
        <div className={style.formulaList}>
            <div ref={messagesEnd} />
          <h1>{folder[showing].title}</h1>
          {[...Array(folder[showing].count).keys()].map((e, i) => {
            return (
              <IonCard key={`img_${i}`} className={style.lessonCard}>
                <IonCardContent>
                  <div className={style.imageDia}>
                    <img
                      src={`/assets/pumps/${folder[showing].folder}/${showing}-${e}-0.PNG`}
                      alt="Pump"
                    />
                  </div>
                  <div className={style.imageDia}>
                    <img
                      src={`/assets/pumps/${folder[showing].folder}/${showing}-${e}-1.PNG`}
                      alt="Pump Details"
                    />
                  </div>
                </IonCardContent>
              </IonCard>
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
}

export default PumpsList;
