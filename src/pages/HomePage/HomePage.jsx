import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonCardHeader, IonCardTitle, IonCard, IonCardSubtitle, IonList, IonItem, IonIcon, useIonPopover, IonButtons, IonButton } from '@ionic/react';
import { closeCircleOutline, informationCircle, informationCircleOutline, menuOutline, trashBinOutline } from 'ionicons/icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { FormulaDict } from '../../components/_FormulaTemplates/FormulaList';

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
    const dispatch = useDispatch();

    const setFormulaList = (item) => dispatch({type: "ADD_FORMULA", value: item})

    const gotoAbout = () => {
        pop_dismiss()
        his.push('/about')
    }

    const gotoActualPump = () => {
        pop_dismiss()
        dispatch({type: "CLEAR_FORMULA"})
        let f1 = FormulaDict["Actual Pump Efficiency"]
        dispatch({
            type: "ADD_FORMULA", 
            value: f1.formulaElement({"varDescription": f1.variables, index: 0})
        })
        let f2 = FormulaDict["Actual Pump Power"]
        dispatch({
            type: "ADD_FORMULA", 
            value: f2.formulaElement({"varDescription": f2.variables, index: 1})
        })
        his.push('/home')
        let f3 = FormulaDict["Actual Pump Flow Rate"]
        dispatch({
            type: "ADD_FORMULA", 
            value: f3.formulaElement({"varDescription": f3.variables, index: 2})
        })
        let f4 = FormulaDict["Actual Pump Flow Head"]
        dispatch({
            type: "ADD_FORMULA", 
            value: f4.formulaElement({"varDescription": f4.variables, index: 3})
        })
        his.push('/home')
    }

    const [pop_present, pop_dismiss] = useIonPopover(PopoverList, { 
        onHide: () => pop_dismiss(), 
        viewAbout: gotoAbout
    });


    return (
        
        <IonPage className={style.mainContent}>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Pump Lec and Calc</IonTitle>
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
                    <h1>Pump Lecturer and Calculator</h1>
                </div>

                <IonCard className={`animate__animated animate__pulse`} color="success" button routerLink='/home'>
                    <IonCardHeader>
                        <IonCardTitle>Calculator</IonCardTitle>
                        <IonCardSubtitle>Calculate Mechanical Engineering Formulas</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

                <IonCard color="secondary" button onClick={gotoActualPump}>
                    <IonCardHeader>
                        <IonCardTitle>Actual Pump Formulas</IonCardTitle>
                        <IonCardSubtitle>Shortcut to calculation for Actual Pump Efficiency and Power.</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

                <h2 className={style.listLabel}>Lectures</h2>

                <IonCard color="tertiary" button routerLink='/lessons/list/dynamic'>
                    <IonCardHeader>
                        <IonCardTitle>Dynamic Pumps</IonCardTitle>
                        <IonCardSubtitle>Dynamic Pumps transfers the fluid by increasing its pressure as it passes through the impeller and diffuser. In this type, the impeller increases the speed of the fluid and the diffuser converts this speed into pressure energy. It uses centrifugal force for the pumping of fluid. </IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

                <IonCard color="tertiary" button routerLink='/lessons/list/positive'>
                    <IonCardHeader>
                        <IonCardTitle>Positive Replacement Pumps</IonCardTitle>
                        <IonCardSubtitle>Positive Displacement Pumps is a fixed amount of fluid at regular intervals. They are built with internal cavities that fill up at the suction side, to be discharged with higher pressure at the outlet. Based on how fluid is displaced, positive displacement pumps can be reciprocating or rotary.</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

                <IonCard color="tertiary" button routerLink='/lessons/pumpsize'>
                    <IonCardHeader>
                        <IonCardTitle>Pump Type List</IonCardTitle>
                        <IonCardSubtitle>See the list of pump types and examples in this comprehensive list.</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

            </IonContent>
            
        </IonPage>
        
    )
    
}

export default HomePage