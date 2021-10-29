import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { numberWithCommas } from "../../../utility/utilities"
import FormulaCard from "../../FormulaCard/FormulaCard"
import FormulaInputCard from "../../FormulaInputCard/FormulaInputCard"
import FormulaInputCardList from "../../FormulaInputCardList/FormulaInputCardList"

import style from "./style.module.css"

function FormulaTotalHeadEnergy(props){
    
    const formulaData = useSelector( state => state.formula.formulaData[props.index] );
    const dispatch = useDispatch();
    const setFormulaData = () => {
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 0, v: inp1 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 1, v: inp2 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 2, v: inp3 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 3, v: inp4 }})
    }
    
    const [inp1, setInp1] = useState(formulaData[0])
    const [inp2, setInp2] = useState(formulaData[1])
    const [inp3, setInp3] = useState(formulaData[2])
    const [inp4, setInp4] = useState(formulaData[3])
    const [formula, setFormula] = useState(false)
    const [answer, setAnswer] = useState(false)

    const [shown, setShown] = useState(true)
    const [clue, setClue] = useState(false)

    useEffect(() => {
        let a = false
        let b = false
        if (inp1 || inp2 || inp3 || inp4){
            a = String.raw`H = \frac{${inp1 ? inp1 : 'p'}}{${inp1 ? inp1 : 'p'}*${inp2 ? inp2 : 'g'}} + \frac{${inp3 ? inp3*inp3 : 'V^2'}}{2*${inp2 ? inp2 : 'g'}} + ${inp4 ? inp4 : 'Z_e'}`
            setFormulaData()
        }
        if (inp1 && inp2 && inp3 && inp4){
            b = String.raw`H = ${numberWithCommas((inp1/inp1*inp2) + ((inp3*inp3)/(2*inp2)) + inp4)}`
        }
        setFormula(a)
        setAnswer(b)
    }, [inp1, inp2, inp3, inp4])

    return(
        <div style={{
            display: shown ? "block" : "none"
        }}>
            <FormulaCard 
                title="Total Head Energy [1]"
                {...props}
                exit={() => {setShown(false)}}
                toggleClue={() => {setClue(!clue)}}
                formulaList = {[
                    String.raw`H = \frac{p}{pg} + \frac{V^2}{2g} + Z_e`,
                    (formula ? formula : ''),
                    (answer ? answer : '')
                ]}
            />

            <FormulaInputCardList {...props} displayDesc={clue}>
                    <FormulaInputCard 
                        variable={String.raw`p = `} 
                        value={inp1}
                        onChange= {e => setInp1(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`g = `} 
                        value={inp2}
                        onChange= {e => setInp2(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`V = `} 
                        value={inp3}
                        onChange= {e => setInp3(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`Z_e = `} 
                        value={inp4}
                        onChange= {e => setInp4(e.target.value)}
                    />
            </FormulaInputCardList>
            
        </div>
        
    )
}

export default FormulaTotalHeadEnergy