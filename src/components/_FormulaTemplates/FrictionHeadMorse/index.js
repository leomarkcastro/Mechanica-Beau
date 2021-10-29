import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { numberWithCommas } from "../../../utility/utilities"
import FormulaCard from "../../FormulaCard/FormulaCard"
import FormulaInputCard from "../../FormulaInputCard/FormulaInputCard"
import FormulaInputCardList from "../../FormulaInputCardList/FormulaInputCardList"

import style from "./style.module.css"

function FormulaFrictionHeadMorse(props){

    const formulaData = useSelector( state => state.formula.formulaData[props.index] );
    const dispatch = useDispatch();
    const setFormulaData = () => {
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 0, v: inp1 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 1, v: inp2 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 2, v: inp3 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 3, v: inp4 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 4, v: inp5 }})
    }
    
    
    const [inp1, setInp1] = useState(formulaData[0])
    const [inp2, setInp2] = useState(formulaData[1])
    const [inp3, setInp3] = useState(formulaData[2])
    const [inp4, setInp4] = useState(formulaData[3])
    const [inp5, setInp5] = useState(formulaData[4])
    const [formula, setFormula] = useState(false)
    const [answer, setAnswer] = useState(false)

    const [shown, setShown] = useState(true)
    const [clue, setClue] = useState(false)

    useEffect(() => {
        let a = false
        let b = false
        if (inp1 || inp2 || inp3 || inp4 || inp5){
            a = String.raw`h_f = \frac{2 \times ${inp1 ? inp1 : 'v'} \times ${inp2 ? inp2 : 'l'} \times ${inp3 ? inp3*inp3 : 'V^2'}}{${inp4 ? inp4 : 'g'} \times ${inp5 ? inp5 : 'D'}}`
            setFormulaData()
        }
        if (inp1 && inp2 && inp3 && inp4 && inp5){
            b = String.raw`h_f = ${numberWithCommas(((2*inp1*inp2*(inp3*inp3))/(inp4*inp5)))}`
        }
        setFormula(a)
        setAnswer(b)
    }, [inp1, inp2, inp3, inp4, inp5])

    return(
        <div style={{
            display: shown ? "block" : "none"
        }}>
            <FormulaCard 
                title="Friction Head (Morse Equation)"
                {...props}
                exit={() => {setShown(false)}}
                toggleClue={() => {setClue(!clue)}}
                formulaList = {[
                    String.raw`h_f = \frac{2flV^2}{gD}`,
                    (formula ? formula : ''),
                    (answer ? answer : '')
                ]}
            />

            <FormulaInputCardList {...props} displayDesc={clue}>
                    <FormulaInputCard 
                        variable={String.raw`f = `} 
                        value={inp1}
                        onChange= {e => setInp1(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`l = `} 
                        value={inp2}
                        onChange= {e => setInp2(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`V = `} 
                        value={inp3}
                        onChange= {e => setInp3(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`g = `} 
                        value={inp4}
                        onChange= {e => setInp4(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`D = `} 
                        value={inp5}
                        onChange= {e => setInp5(e.target.value)}
                    />
            </FormulaInputCardList>
            
        </div>
        
    )
}

export default FormulaFrictionHeadMorse