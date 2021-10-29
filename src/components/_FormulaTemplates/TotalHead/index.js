import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { numberWithCommas } from "../../../utility/utilities"
import FormulaCard from "../../FormulaCard/FormulaCard"
import FormulaInputCard from "../../FormulaInputCard/FormulaInputCard"
import FormulaInputCardList from "../../FormulaInputCardList/FormulaInputCardList"

import style from "./style.module.css"

function FormulaTotalHead(props){
    
    const formulaData = useSelector( state => state.formula.formulaData[props.index] );
    const dispatch = useDispatch();
    const setFormulaData = () => {
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 0, v: inp1 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 1, v: inp2 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 2, v: inp3 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 3, v: inp4 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 4, v: inp5 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 5, v: inp6 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 6, v: inp7 }})
        dispatch({type: "SET_FORMULA_DATA", value: { c: props.index, i: 7, v: inp8 }})
    }
    
    const [inp1, setInp1] = useState(formulaData[0])
    const [inp2, setInp2] = useState(formulaData[1])
    const [inp3, setInp3] = useState(formulaData[2])
    const [inp4, setInp4] = useState(formulaData[3])
    const [inp5, setInp5] = useState(formulaData[4])
    const [inp6, setInp6] = useState(formulaData[5])
    const [inp7, setInp7] = useState(formulaData[6])
    const [inp8, setInp8] = useState(formulaData[7])

    const [form1, setForm1] = useState('')
    const [form2, setForm2] = useState('')
    const [form3, setForm3] = useState('')
    const [form4, setForm4] = useState('')

    const [formula, setFormula] = useState(false)
    const [answer, setAnswer] = useState(false)

    const [shown, setShown] = useState(true)
    const [clue, setClue] = useState(false)

    useEffect(() => {
        let a = false
        let b = false
        let zipe = [
            ['Z', inp1, 'Z_d', inp2, 'Z_s', setForm1],
            ['h_p', inp3, 'h_{pd}', inp4, 'h_{ps}', setForm2],
            ['h_v', inp5, 'h_{vd}', inp6, 'h_{vs}', setForm3],
        ]

        zipe.map((e) => {
            if (e[1] && e[3]){
                e[5](String.raw`${e[0]} = ${Number(e[1]) - Number(e[3])}`)
            }
            else if (e[1] || e[3]){
                e[5](String.raw`${e[0]} = (${e[1] ? e[1] : e[2]} - ${e[3] ? e[3] : e[4]})`)
            }
            return 0
        })

        if (inp7 && inp8){
            setForm4(String.raw`h_f = ${Number(inp7) + Number(inp8)}`)
        }
        else if (inp7 || inp8){
            setForm4(String.raw`h_f = (${inp7 ? inp7 : 'h_{fd}'} + ${inp8 ? inp8 : 'h_{fs}'})`)
        }

        setFormulaData()
            
        if (inp1 && inp2 && inp3 && inp4 && inp5 && inp6 && inp7 && inp8){
            b = String.raw`H = ${numberWithCommas(
                (inp1-inp2) + (inp3-inp4) + (inp5-inp6) + (inp7-inp8)
            )}`
        }
        setFormula(a)
        setAnswer(b)
    }, [inp1, inp2, inp3, inp4, inp5, inp6, inp7, inp8])

    return(
        <div style={{
            display: shown ? "block" : "none"
        }}>
            <FormulaCard 
                title="Total Head or Total Dynamic Head"
                {...props}
                exit={() => {setShown(false)}}
                toggleClue={() => {setClue(!clue)}}
                formulaList = {[
                    (formula ? formula : String.raw`H = Z + h_p + h_v + h_f`),
                    (form1 ? form1 : String.raw`Z = (Z_d - Z_s)`),
                    (form2 ? form2 : String.raw`h_p = (h_{pd} - h_{ps})`),
                    (form3 ? form3 : String.raw`h_f = (h_{fd} - h_{fs})`),
                    (form4 ? form4 : String.raw`h_f = (h_{fd} + h_{fs})`),
                    (answer ? answer : '')
                ]}
            />

            <FormulaInputCardList {...props} displayDesc={clue}>
                    <FormulaInputCard 
                        variable={String.raw`Z_d = `} 
                        value={inp1}
                        onChange= {e => setInp1(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`Z_s = `} 
                        value={inp2}
                        onChange= {e => setInp2(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`h_{pd} = `} 
                        value={inp3}
                        onChange= {e => setInp3(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`h_{ps} = `} 
                        value={inp4}
                        onChange= {e => setInp4(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`h_{vd} = `} 
                        value={inp5}
                        onChange= {e => setInp5(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`h_{vs} = `} 
                        value={inp6}
                        onChange= {e => setInp6(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`h_{fd} = `} 
                        value={inp7}
                        onChange= {e => setInp7(e.target.value)}
                    />
                    <FormulaInputCard 
                        variable={String.raw`h_{fs} = `} 
                        value={inp8}
                        onChange= {e => setInp8(e.target.value)}
                    />
            </FormulaInputCardList>
            
        </div>
        
    )
}

export default FormulaTotalHead