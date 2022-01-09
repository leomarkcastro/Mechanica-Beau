import { db_set, db_get ,db_check } from "./local_storage"

const saveSlot = "Formula"
const ver = "09062021"

const initialState = {
    ver: ver,
    formula : [

    ],
    formulaData : [

    ],
}



async function load_profile(){
    
    let dat = {
        ...initialState
    }

    let check = await db_check(saveSlot)
    let loadSlot = null

    if (check) {
        loadSlot = await db_get(saveSlot)
        dat = {
            ...dat,
            ...loadSlot,
            ver: ver,
        }
    }

    db_set(saveSlot, dat)
        
    
    return dat

}


const formula_reducer = (state = initialState, actions) => {

    let ret = null
    let container = 0
    let index = 0
    let value = 0

    // actions should come in the form of objects with { type , value , ... }
    switch (actions.type){

        case 'ADD_FORMULA':

            ret = {
                ...state,
            }
            ret.formula.push(actions.value) // should contain settings
            ret.formulaData.push({}) // should contain settings

            //db_set(saveSlot, ret)
            return ret

        case 'SET_FORMULA_DATA':

            ret = {
                ...state,
            }

            container = actions.value.c
            index = actions.value.i
            value = actions.value.v

            ret.formulaData[container][index] = value

            //db_set(saveSlot, ret)
            return ret

        case 'CLEAR_FORMULA':

            ret = {
                ...state,
            }

            ret.formula = []

            //db_set(saveSlot, ret)
            return ret

        
        default:
            return state
    }

    
}

export default formula_reducer