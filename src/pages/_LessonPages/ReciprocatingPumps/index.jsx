import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonCardHeader, IonCardTitle, IonCard, IonCardSubtitle, IonButtons, IonBackButton, IonCardContent } from '@ionic/react';

import style from "./style.module.css"

import img from "./engine.jpg"
import { MathComponent } from 'mathjax-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { FormulaDict } from '../../../components/_FormulaTemplates/FormulaList';

const data = {
    title: "Reciprocating Pumps",
    description : "Reciprocating is a positive displacement unit wherein the pumping action is accomplished by the forward and backward movement of a piston or plunger inside a cylinder usually provided with valves. These types of pumps produce very high pressure.  They are used in petrochemical, oil & gas, refinery, agriculture, and fertilizer industries.",
    application: "These types of pumps produce very high pressure.  They are used in petrochemical, oil & gas, refinery, agriculture, and fertilizer industries. ",
    image: img,
    formulas: [
        {
            title: "Discharge",
            formulas : [
                {
                    subtitle: "",
                    formula: String.raw`D = \frac{2ALN}{60}`,
                    given: [
                        "D = Discharge/Second",
                    ],
                    formulaElement: FormulaDict["Discharge"].formulaElement,
                    variables: FormulaDict["Discharge"].variables,
                }
            ]
        },
        {
            title: "Slip",
            formulas : [
                {
                    subtitle: "",
                    formula: String.raw`S = Q_{th} - Q_a`,
                    given: [
                        "S = Slip",
                        "Qth = Theoretical Discharge",
                        "Qa = Actual Discharge",
                    ],
                    formulaElement: FormulaDict["Slip"].formulaElement,
                    variables: FormulaDict["Slip"].variables,
                }
            ]
        }
    ]
}

function ReciprocatingPumps() {

    const dispatch = useDispatch()
    const history = useHistory()

    function selectCard(item){
        dispatch({type: "ADD_FORMULA", value: item})
        //history.goBack()
        history.push("/home")
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
            </IonHeader>
            
            <IonContent>

                <div  className={style.formulaList}>
                    <h1>{data.title}</h1>

                    <IonCard className={style.lessonCard}>
                        <IonCardHeader>
                            <IonCardTitle>Diagram</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <div className={style.imageDia}>
                                <img src={data.image} alt="Reciprocating Machine" />
                            </div>
                        </IonCardContent>
                    </IonCard>

                    <IonCard className={style.lessonCard}>
                        <IonCardHeader>
                            <IonCardTitle>Description</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {data.description}
                        </IonCardContent>
                    </IonCard>

                    <IonCard className={style.lessonCard}>
                        <IonCardHeader>
                            <IonCardTitle>Applications</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {data.application}
                        </IonCardContent>
                    </IonCard>

                    <IonCard className={style.lessonCard}>
                        <IonCardHeader>
                            <IonCardTitle>Formulas</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            
                            {
                                data.formulas.map((e,i) => {
                                    return (
                                        <React.Fragment key={`sol_${i}`}>
                                            <h3>{e.title}</h3>
                                            {e.formulas.map((ee,ii) => {
                                                return (
                                                    <div key={`${i}_${ii}`} className={style.formulaShow}>
                                                        <div  className={style.formulaShow_left}>
                                                            <h3>{ee.subtitle}</h3>
                                                            <IonCard color="success" className={style.solCard} button onClick={selectCard.bind(this, ee.formulaElement())}>
                                                                <MathComponent tex={ee.formula} display={false}/>
                                                            </IonCard>
                                                        </div>
                                                        <div  className={style.formulaShow_right}>
                                                            {  
                                                                ee.given.map((eee,iii) => <p key={`${i}_${ii}_${iii}`}>{eee}</p>)
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </React.Fragment>
                                    )
                                })
                            }

                        </IonCardContent>
                    </IonCard>
                    
                </div>

            </IonContent>
            
        </IonPage>
        
    )
    
}

export default ReciprocatingPumps