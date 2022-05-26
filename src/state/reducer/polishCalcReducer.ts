import { AppAction } from "state/AppAction"
import { Reducer } from "redux"


type State = {
    stack: number[],
    currentValue: number,
    history: State[],
    dot: number 

}

const initialState: State = {
    stack : [],
    currentValue: 0,
    history : [],
    dot: 0
}

export const polishCalcReducer: Reducer<State, AppAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'NEW_VALUE':
            if (state.dot === 2) break
            return {
                ...state,
                currentValue: state.dot ?
                             Number("" + state.currentValue + "." + action.payload) :
                              Number("" + state.currentValue + action.payload),
                dot: state.dot ? 2 : 0
            }
        case 'INTRO':
            return {
                ...state,
                stack: state.stack.concat(state.currentValue),
                history: state.history.concat(state),
                currentValue: 0,
                dot: 0
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
                dot: 1
            }
        case 'UNDO':
            if (state.history.length === 0) break
            let lastState = state.history[state.history.length - 1]
            return {
                ...lastState,
                history: state.history.slice(0,-1)
                    
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
                
                stack: newStack.concat(operand1 + operand2),
                history: state.history.concat(state)
            }
        case 'SUBSTRACTION':
            return {
                ...state,
                
                stack: newStack.concat(operand1 - operand2),
                history: state.history.concat(state)
            }
        case 'MULTIPLICATION':
            return {
                ...state,
                
                stack: newStack.concat(operand1 * operand2),
                history: state.history.concat(state)
            }
        case 'DIVITION':
            return {
                ...state,
                
                stack: newStack.concat(operand1 / operand2),
                history: state.history.concat(state)
            }
            
        default:
            break;
    }
    return state
}