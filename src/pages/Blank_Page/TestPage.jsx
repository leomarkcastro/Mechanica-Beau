import React from "react"

import { IonPage, IonContent, IonHeader, IonIcon, IonSpinner } from '@ionic/react';
import { bookOutline, qrCode,  } from 'ionicons/icons';

import style from "./TestPage.module.css"


class TestPage extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {

        }

    }

    render(){
        return (
            
            <IonPage>
            
                <IonContent>

                </IonContent>
                
            </IonPage>
            
        )
    }
    
}

export default TestPage