import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { numberWithCommas } from "../../../utility/utilities"
import FormulaCard from "../../FormulaCard/FormulaCard"
import FormulaInputCard from "../../FormulaInputCard/FormulaInputCard"
import FormulaInputCardList from "../../FormulaInputCardList/FormulaInputCardList"

import style from "./style.module.css"

function ActualPumpPowerH(props){

    const formulaData = useSelector( state => state.formula.formulaData[props.index] );
    const dispatch = useDispatch();
    const setFormulaData = () => {
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 0, v: inp1 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 1, v: inp2 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 2, v: inp3 }})
    }
    
    const [inp1, setInp1] = useState(formulaData[0])
    const [inp2, setInp2] = useState(formulaData[1])
    const [inp3, setInp3] = useState(formulaData[2] ? formulaData[2] : 9.8)
    const [formula, setFormula] = useState(false)
    const [answer, setAnswer] = useState(false)

    const [shown, setShown] = useState(true)
    const [clue, setClue] = useState(false)

    useEffect(() => {
        let a = false
        let b = false
        if (inp1 || inp2 || inp3){
            a = String.raw`H = \frac{${inp1 ? inp1 : 'P'}}{${inp2 ? inp2 : String.raw`Q`}} \times {${inp3 ? inp3 : '\gamma'}}`
            setFormulaData()
        }
        if (inp1 && inp2 && inp3){
            b = String.raw`H = ${numberWithCommas(((inp1/inp2)*inp3))}`
        }
        setFormula(a)
        setAnswer(b)
    }, [inp1, inp2, inp3])

    return(
        <div style={{
            display: shown ? "block" : "none"
        }}>
            <FormulaCard 
                title="Actual Pump Head (H)"
                {...props}
                exit={() => {setShown(false)}}
                toggleClue={() => {setClue(!clue)}}
                formulaList = {[
                    String.raw`H = \frac{P}{Q} \times {\gamma}`,
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
                        variable={String.raw`Q = `} 
                        value={inp2}
                        onChange= {e => setInp2(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`\gamma = `} 
                        value={inp3}
                        onChange= {e => setInp3(e.target.value)}
                    />
            </FormulaInputCardList>
            
        </div>
        
    )
}

export default ActualPumpPowerH