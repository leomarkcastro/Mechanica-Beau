import React from "react"

import { IonIcon } from '@ionic/react';
import {  desktopOutline,  } from 'ionicons/icons';

import logoImg from "../../resources/icon.png"

import style from "./Logo.module.css"

class Logo extends React.Component {

    constructor(props){
        super(props)
        
    }

    render(){
        return (
            <div className={style.logoBody}>
                <div className={style.logoImage}>
                    <img src={logoImg} />
                </div>
                <div className={style.logoText}>
                    <p className={style.logoText__highlight}>PUMP</p>
                    <p>Lecturer and Calculator</p>
                </div>
            </div>
        )
    }
    
}

export default Logo