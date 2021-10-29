import React from "react"

import { IonPage, IonContent, IonHeader, IonIcon, IonSpinner } from '@ionic/react';
import { bookOutline, qrCode,  } from 'ionicons/icons';

import Logo from "../../components/Logo/Logo"

import style from "./Initializer.module.css"

class Initializer extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            user : null,
        }

    }

    componentDidMount(){
        setTimeout(()=>{
            this.props.history.replace("/start")
        }, 2000)
    }

    render(){
        return (
            
            <IonPage>
            
                <IonContent>

                    
                    <div className={style.logo}>
                        <Logo />
                        
                    </div>
                    

                    <div className={style.notice}>
                        <sub><IonSpinner name="dots" /></sub>
                    </div>
                    

                </IonContent>
                
            </IonPage>
            
        )
    }
    
}

export default Initializer