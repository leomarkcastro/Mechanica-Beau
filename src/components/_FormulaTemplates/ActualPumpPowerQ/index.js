import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { numberWithCommas } from "../../../utility/utilities"
import FormulaCard from "../../FormulaCard/FormulaCard"
import FormulaInputCard from "../../FormulaInputCard/FormulaInputCard"
import FormulaInputCardList from "../../FormulaInputCardList/FormulaInputCardList"

import style from "./style.module.css"

function ActualPumpPowerQ(props){

    const formulaData = useSelector( state => state.formula.formulaData[props.index] );
    const dispatch = useDispatch();
    const setFormulaData = () => {
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 0, v: inp1 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 1, v: inp2 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 2, v: inp3 }})
    }
    
    const [inp1, setInp1] = useState(formulaData[0])
    const [inp2, setInp2] = useState(formulaData[1] ? formulaData[1] : 9.8)
    const [inp3, setInp3] = useState(formulaData[2])
    const [formula, setFormula] = useState(false)
    const [answer, setAnswer] = useState(false)

    const [shown, setShown] = useState(true)
    const [clue, setClue] = useState(false)

    useEffect(() => {
        let a = false
        let b = false
        if (inp1 || inp2 || inp3){
            a = String.raw`Q = \frac{${inp1 ? inp1 : 'P'}}{${inp2 ? inp2 : String.raw`\gamma`}} \times {${inp3 ? inp3 : 'H'}}`
            setFormulaData()
        }
        if (inp1 && inp2 && inp3){
            b = String.raw`Q = ${numberWithCommas(((inp1/inp2)*inp3))}`
        }
        setFormula(a)
        setAnswer(b)
    }, [inp1, inp2, inp3])

    return(
        <div style={{
            display: shown ? "block" : "none"
        }}>
            <FormulaCard 
                title="Actual Pump Flow Rate (Q)"
                {...props}
                exit={() => {setShown(false)}}
                toggleClue={() => {setClue(!clue)}}
                formulaList = {[
                    String.raw`Q = \frac{P}{\gamma} \times {H}`,
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
                    <FormulaInputCard 
                        variable={String.raw`H = `} 
                        value={inp3}
                        onChange= {e => setInp3(e.target.value)}
                    />
            </FormulaInputCardList>
            
        </div>
        
    )
}

export default ActualPumpPowerQ