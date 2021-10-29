import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { numberWithCommas } from "../../../utility/utilities"
import FormulaCard from "../../FormulaCard/FormulaCard"
import FormulaInputCard from "../../FormulaInputCard/FormulaInputCard"
import FormulaInputCardList from "../../FormulaInputCardList/FormulaInputCardList"

import style from "./style.module.css"

function FormulaVolumEffic(props){
    
    const formulaData = useSelector( state => state.formula.formulaData[props.index] );
    const dispatch = useDispatch();
    const setFormulaData = () => {
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 0, v: inp1 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 1, v: inp2 }})
    }
    
    const [inp1, setInp1] = useState(formulaData[0])
    const [inp2, setInp2] = useState(formulaData[1])
    const [formula, setFormula] = useState(false)
    const [answer, setAnswer] = useState(false)

    const [shown, setShown] = useState(true)
    const [clue, setClue] = useState(false)

    useEffect(() => {
        let a = false
        let b = false
        if (inp1 || inp2){
            a = String.raw`S = \frac{${inp1 ? inp1 : 'Q'}}{${inp1 ? inp1 : 'V_D'}}`
            setFormulaData()
        }
        if (inp1 && inp2){
            b = String.raw`S = ${numberWithCommas(inp1/inp2)}`
        }
        setFormula(a)
        setAnswer(b)
    }, [inp1, inp2])

    return(
        <div style={{
            display: shown ? "block" : "none"
        }}>
            <FormulaCard 
                title="Volumetric Efficiency"
                {...props}
                exit={() => {setShown(false)}}
                toggleClue={() => {setClue(!clue)}}
                formulaList = {[
                    String.raw`e_v = \frac{Q}{V_D}`,
                    (formula ? formula : ''),
                    (answer ? answer : '')
                ]}
            />

            <FormulaInputCardList {...props} displayDesc={clue}>
                    <FormulaInputCard 
                        variable={String.raw`Q = `} 
                        value={inp1}
                        onChange= {e => setInp1(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`V_D = `} 
                        value={inp2}
                        onChange= {e => setInp2(e.target.value)}
                        descToggle={true}
                        description={props.varDescription[0][1]}
                    />
            </FormulaInputCardList>
            
        </div>
        
    )
}

export default FormulaVolumEffic