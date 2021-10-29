import React from "react"

import { IonCardContent, IonCard, IonButton, IonIcon } from '@ionic/react';

import { MathComponent } from 'mathjax-react'

import style from "./FormulaCard.module.css"
import {IDGen} from "../../utility/utilities";
import { informationCircleOutline } from "ionicons/icons";



function FormulaCard({ title, formulaList, exit, toggleClue }){

    return (
        <IonCard className={`${style.card} animate__animated animate__fadeIn animate__faster`}>
            <IonCardContent>
                <p>{title}</p>
                {
                    formulaList.map((e,i) => (
                        <MathComponent 
                            tex={e}
                            key={`formula_${IDGen()}`}
                        />
                    ))
                }
                <IonButton fill="clear" className={style.info} onClick={toggleClue}>
                    <IonIcon icon={informationCircleOutline}/>
                </IonButton>
                <IonButton fill="clear" className={style.exit} onClick={exit}>X</IonButton>
                
            </IonCardContent>
        </IonCard>
    )

}

export default FormulaCard