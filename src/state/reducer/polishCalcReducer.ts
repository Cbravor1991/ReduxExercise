import { AppAction } from "state/AppAction"
import { Reducer } from "redux"

type State = {
    stack: number[],
    currentValue: number,
    history: number[],
    dot: boolean 

}

const initialState: State = {
    stack : [],
    currentValue: 0,
    history : [],
    dot: false
}

export const polishCalcReducer: Reducer<State, AppAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'NEW_VALUE':
            return {
                ...state,
                currentValue: state.dot ?
                             Number("" + state.currentValue + "." + action.payload) :
                              Number("" + state.currentValue + action.payload),

            }
        case 'INTRO':
            return {
                ...state,
                stack: state.stack.concat(state.currentValue),
                currentValue: 0
            }
        case 'SQUARE_ROOT':
            let operand1 = state.stack[state.stack.length - 1]
            return {
                ...state,
                stack: state.stack.slice(0,-1).concat(Math.sqrt(operand1))
            }
        case 'SUMMATION':
            return {
                ...state,

                stack: [state.stack.reduce((prev,curr) => prev + curr)]
            }
        case 'DOT':
            return {
                ...state,
                dot: true
            }
        default:
            break;
    }

        
    let operand1 = state.stack[state.stack.length - 1]
    let operand2 = state.stack[state.stack.length - 2]
            
    let newStack = state.stack.slice(0,-2)

    switch (action.type) {
        case 'ADDITION':
            return {
                ...state,
                
                stack: newStack.concat(operand1 + operand2)
            }
        case 'SUBSTRACTION':
            return {
                ...state,
                
                stack: newStack.concat(operand1 - operand2)
            }
        case 'MULTIPLICATION':
            return {
                ...state,
                
                stack: newStack.concat(operand1 * operand2)
            }
        case 'DIVITION':
            return {
                ...state,
                
                stack: newStack.concat(operand1 / operand2)
            }
            
        default:
            break;
    }
    return state
}