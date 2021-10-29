import { IonPage, IonContent, IonHeader, IonIcon, IonToolbar, IonButtons, IonTitle, IonButton, IonFab, IonFabButton, useIonModal, IonSlide, IonSlides, IonCardContent, IonCardTitle, IonCard, IonList, IonItem, useIonPopover, IonBackButton  } from '@ionic/react';
import { addOutline, closeCircleOutline, informationCircle, menuOutline, trashBinOutline,  } from 'ionicons/icons';

import style from "./CalculatePage.module.css"
import { useEffect, useRef, useState } from 'react';
import { MathComponent } from 'mathjax-react';
import { IDGen } from '../../utility/utilities';
import { FormulaList } from '../../components/_FormulaTemplates/FormulaList';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

const slideOpts = {
    loop: true,
    initialSlide: 5,
};

const Body = ({ onDismiss, addFormula, gotoFormula }) => {

    return (
        <div>
            <IonSlides pager={true} options={slideOpts}>
                {
                    FormulaList.map((e,i) => (
                        <IonSlide
                            key={`form_slide_${IDGen()}`} >
                            <IonCard 
                                className={style.formulaCard}
                                onClick={() => {
                                    addFormula(e.formulaElement({varDescription: e.variables})); 
                                    slideOpts.initialSlide = i
                                    onDismiss();
                                }}
                                button={true}
                            >
                                <IonCardContent>
                                    <IonCardTitle>{e.title}</IonCardTitle>
                                    <IonCard className={style.formulaCardFormula}>
                                        <MathComponent  height="500px" tex={e.formula} />
                                    </IonCard>
                                    <p>{e.description}</p>
                                </IonCardContent>
                            </IonCard>
                    
                        </IonSlide>
                    ))
                }
            </IonSlides>
            <IonButton fill="outline" color="medium" expand="block" onClick={() => gotoFormula()}>
                Show All Formula
            </IonButton>
        </div>
    )
};

const PopoverList = ({ onHide, viewAbout, dispatch }) => {

    const clearList = () => dispatch({type: "CLEAR_FORMULA"})

    return (
        <IonList>
            <IonItem button onClick={clearList}><IonIcon icon={trashBinOutline} slot="start"/> Clear List</IonItem>
            {/*
            <IonItem button onClick={viewAbout}><IonIcon icon={informationCircle} slot="start"/> About</IonItem>
            */}
            <IonItem lines="none" detail={false} button onClick={onHide}>
                <IonIcon icon={closeCircleOutline} slot="start"/> Close
            </IonItem>
        </IonList>
    );
}

function CalculatePage() {

    const his = useHistory()
    //const [ formulaList, setFormulaList ] = useState([])
    const formulaList = useSelector( state => state.formula.formula );
    const dispatch = useDispatch();

    const setFormulaList = (item) => dispatch({type: "ADD_FORMULA", value: item})

    const handleDismiss = () => {
        dismiss();
    };

    const addFormulaList = (item) => {

        setFormulaList(item)
    };

    const gotoFormula = () => {
        dismiss()
        his.push('/formula')
    }

    const gotoAbout = () => {
        pop_dismiss()
        his.push('/about')
    }

    const messagesEnd = useRef()

    const scrollToBottom = () => {
        messagesEnd.current && messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        setTimeout(() => {
            scrollToBottom()
        }, 500)
    }, [])

    const [present, dismiss] = useIonModal(
        Body, 
        { 
            onDismiss : handleDismiss, 
            addFormula: addFormulaList,
            gotoFormula: gotoFormula
        }
    );

    const [pop_present, pop_dismiss] = useIonPopover(PopoverList, { 
        dispatch: dispatch,
        onHide: () => pop_dismiss(), 
        viewAbout: gotoAbout
    });


    return (
        
        <IonPage className={style.mainContent}>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/start'/>
                    </IonButtons>
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
                    <IonTitle>Calculator</IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <IonContent className={style.formulaList}>
    
                <div className={style.formulaContent}>

                    {
                        formulaList.length ?
                        formulaList.map((e,i) => e({index: i})) 
                        :
                        <IonCard className={`${style.emptyCard} animate__animated animate__fadeInUp`}>
                            <IonCardContent>
                                <IonCardTitle>Welcome to Mechanica Beau <sub>/byo͞o/</sub></IonCardTitle>
                                <br/>
                                <p>Your friendly formula sheet containing some of the useful Mechanical Principles Formulas.</p>
                                <br />
                                <li>Click the (Add New Formula) Button to start viewing formulas and adding them into the queue list</li>
                            </IonCardContent>
                        </IonCard> 
                    }

                    <div ref={messagesEnd} />

                </div>

                <IonFab className={`${style.fabParent} animate__animated animate__fadeInUp`} vertical="bottom" horizontal="center" slot="fixed">
                    <IonFabButton
                        className={style.fab}
                        onClick={() => {
                            present({
                                cssClass: style.formulaSelect,
                            });
                        }}
                    >
                        {/*<IonIcon icon={addOutline} />*/}
                        Add New Formula
                    </IonFabButton>
                </IonFab>

            </IonContent>
            
        </IonPage>
        
    )
    
}

export default CalculatePage