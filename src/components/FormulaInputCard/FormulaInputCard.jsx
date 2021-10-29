import React from "react"

import { IonCardContent, IonCard, IonLabel } from '@ionic/react';

import { MathComponent } from 'mathjax-react'

import style from "./FormulaInputCard.module.css"


function FormulaInputCard({ variable, value, onChange, descToggle, description }){

    return (
        <IonCard className={style.card_input}>
            <IonCardContent>
                <IonLabel>
                    <MathComponent 
                        tex={variable} display={false}/>
                </IonLabel>
                <input value={value} onChange={onChange} type="number"/>
                {
                    !descToggle ? 
                    <></> :
                    <p> {description} </p>
                }
            </IonCardContent>
        </IonCard>
    )

}

export default FormulaInputCard