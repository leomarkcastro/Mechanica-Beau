import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonCardHeader, IonCardTitle, IonCard, IonCardSubtitle, IonButtons, IonBackButton, IonCardContent } from '@ionic/react';

import style from "./style.module.css"

import img from "./engine.jpg"
import { MathComponent } from 'mathjax-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { FormulaDict } from '../../../components/_FormulaTemplates/FormulaList';

const data = {
    title: "Centrifugal Pumps",
    description : "A machine, which the pumping action is accomplish by imparting kinetic energy to the fluid by a high-speed revolving impeller with vanes and subsequently converting, thins kinetic energy into pressure energy by passing through a volute casing or through diffuser vanes. The most common uses of the centrifugal pumps are sewage drainage, mud, sludge, crude oil pumping, hot water circulation, pressurization, water supply, and boiler water treatment.",
    application: "The most common uses of the centrifugal pumps are sewage drainage, mud, sludge, crude oil pumping, hot water circulation, pressurization, water supply, and boiler water treatment.",
    image: img,
    formulas: [
        {
            title: "Heads",
            formulas : [
                {
                    subtitle: "",
                    formula: String.raw`h_1 = \frac{p1}{\gamma_1}`,
                    given: [
                        "ρ= Pressure",
                        "γ = Specific weight",
                        
                    ],
                    formulaElement: FormulaDict["Pressure Head"].formulaElement,
                    variables:      FormulaDict["Pressure Head"].variables,
                },
                {
                    subtitle: "",
                    formula: String.raw`H = \frac{p}{pg} + \frac{V^2}{2g} + Z_e`,
                    given: [
                        "V= Velocity",
                        "g = acceleration due to gravity",
                        "Z= Source is below pump centerline",
                        "p = pressure",
                    ],
                    formulaElement: FormulaDict["Total Head Energy [1]"].formulaElement,
                    variables: FormulaDict["Total Head Energy [1]"].variables,
                },
                {
                    subtitle: "",
                    formula: String.raw`H = \frac{V^2}{2g} + \frac{p}{y} + Z`,
                    given: [
                        "H = energy (total head) of system",
                        "V = Velocity",
                        "g= acceleration due to gravity",
                        "ρ = Pressure",
                        "γ = Specific Weight",
                        "Ζ= Elevation above or below plane",
                    ],
                    formulaElement: FormulaDict["Total Head Energy [2]"].formulaElement,
                    variables: FormulaDict["Total Head Energy [2]"].variables,
                },
                {
                    subtitle: "",
                    formula: String.raw`N_s = \frac{N\sqrt{Q}}{H^{3/4}}`,
                    given: [
                        "N = Pump speed in RPM",
                        "Q = Capacity in gpm at the best efficiency point",
                        "H= total head per stage at the best efficiency point",
                    ],
                    formulaElement: FormulaDict["Specific Speed"].formulaElement,
                    variables: FormulaDict["Specific Speed"].variables,
                },
            ]
        }
    ]
}

function CentrifugalPumps() {

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
                    <IonTitle>Mechanica Beau</IonTitle>
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
                                <img src={data.image} alt="Centrifugal Machine" />
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
                                                            <IonCard color="success" className={style.solCard} button onClick={selectCard.bind(this, ee.formulaElement({varDescription: ee.variables}))}>
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

export default CentrifugalPumps