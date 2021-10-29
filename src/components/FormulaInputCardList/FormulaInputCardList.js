import { IonCard, IonCardContent } from "@ionic/react"
import { MathComponent } from "mathjax-react"
import style from "./FormulaInputCardList.module.css"

function FormulaInputCardList({children, varDescription, displayDesc}){
    
    return(
        <>
            {
                displayDesc ?
                <IonCard className={`${style.clueList} animate__animated animate__fadeIn animate__faster`}>
                    <IonCardContent>
                        {varDescription && varDescription.map(((e,i) => (
                            <p><MathComponent tex={e[0]} display={false}/> - {e[1]}</p>
                        )))}
                    </IonCardContent>
                </IonCard> :
                <></>
            }
            
            <div className={`${style.inputList} animate__animated animate__fadeIn animate__faster`}>
                <div className={style.inputAccent}>
                    <div className={style.inputAccentBar} />
                </div>
                <div className={style.inputCards}>
                    {children}
                </div>
                
            </div>
        </>
    )
        
}

export default FormulaInputCardList