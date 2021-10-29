import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonTitle, IonBackButton, IonCard, IonCardTitle, IonCardContent, IonSearchbar  } from '@ionic/react';
import { addOutline, menuOutline,  } from 'ionicons/icons';
import { MathComponent } from 'mathjax-react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import MathJax from "react-mathjax"

import { FormulaList } from '../../components/_FormulaTemplates/FormulaList';
import { IDGen } from '../../utility/utilities';

import style from "./FormulaCatalogue.module.css"
import { useEffect, useState } from 'react';

function FormulaCatalogue() {

    const dispatch = useDispatch()
    const history = useHistory()

    const [searchText, setSearchText] = useState('')

    function selectCard(item){
        dispatch({type: "ADD_FORMULA", value: item})
        history.goBack()
    }

    useEffect(() => {
        searchFunction(searchText)
    }, [searchText])

    function searchFunction(searchText){
        const query = searchText.toLowerCase();
        
        const items = Array.from(document.body.querySelectorAll('.search_sphere'));

        requestAnimationFrame(() => {
            items.forEach(item => {
                const shouldShow = item.getAttribute("card-value").toLowerCase().indexOf(query) > -1;
                item.style.display = shouldShow ? 'block' : 'none';
            });
        });
    }

    return (
        
        <IonPage>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Formula Catalogue</IonTitle>
                </IonToolbar>
                <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value)} debounce={500}/>
            </IonHeader>
            
            <IonContent>

                
                
                <MathJax.Provider>

                {
                    FormulaList.map((e,i) => (
                        <IonCard 
                            key={`form_cat_${IDGen()}_${i}`} 
                            className={`search_sphere ${style.cardCata}`}
                            cardValue={e.title}
                            onClick={selectCard.bind(this, e.formulaElement())}
                            button={true}
                        >

                            {/*<div style={{
                                backgroundImage: `url("${e.image}")`
                            }} className={style.cardCataImage}/>*/}

                            <IonCardContent className={style.cardCataText}>
                                <IonCardTitle>{e.title}</IonCardTitle>
                                    <MathJax.Node formula={e.formula} />
                                <p>{e.description}</p>
                            </IonCardContent>

                        </IonCard>
                    ))
                }
                
                </MathJax.Provider>

            </IonContent>
            
        </IonPage>
        
    )
    
}

export default FormulaCatalogue