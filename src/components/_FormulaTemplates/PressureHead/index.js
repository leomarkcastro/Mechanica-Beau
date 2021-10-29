import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { numberWithCommas } from "../../../utility/utilities"
import FormulaCard from "../../FormulaCard/FormulaCard"
import FormulaInputCard from "../../FormulaInputCard/FormulaInputCard"
import FormulaInputCardList from "../../FormulaInputCardList/FormulaInputCardList"

import style from "./style.module.css"

function FormulaPressureHead(props){
    
    const formulaData = useSelector( state => state.formula.formulaData[props.index] );
    const dispatch = useDispatch();
    const setFormulaData = () => {
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 0, v: inp1 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 1, v: inp2 }})
    }
    
    const [inp1, setInp1] = useState(formulaData[0])
    const [inp2, setInp2] = useState(formulaData[1] || 9.81)
    const [formula, setFormula] = useState(false)
    const [answer, setAnswer] = useState(false)

    const [shown, setShown] = useState(true)
    const [clue, setClue] = useState(false)

    useEffect(() => {
        let a = false
        let b = false
        if (inp1 || inp2){
            a = String.raw`h_{p} = \frac{${inp1 ? inp1 : 'P'}}{${inp2 ? inp2 : '\gamma'}}`
            setFormulaData()
        }
        if (inp1 && inp2){
            b = String.raw`h_{p} = ${numberWithCommas(inp1 / inp2)}`
        }
        setFormula(a)
        setAnswer(b)
    }, [inp1, inp2])

    return(
        <div style={{
            display: shown ? "block" : "none"
        }}>
            <FormulaCard 
                title="Pressure Head"
                {...props}
                exit={() => {setShown(false)}}
                toggleClue={() => {setClue(!clue)}}
                formulaList = {[
                    String.raw`h_{p} = \frac{P}{\gamma}`,
                    (formula ? formula : ''),
                    (answer ? answer : '')
                ]}
            />

            <FormulaInputCardList {...props} displayDesc={clue}>
                    <FormulaInputCard 
                        variable={String.raw`P = `} 
                        value={inp1}
                        onChange= {e => setInp1(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`\gamma = `} 
                        value={inp2}
                        onChange= {e => setInp2(e.target.value)}
                    />
            </FormulaInputCardList>
            
        </div>
        
    )
}

export default FormulaPressureHead