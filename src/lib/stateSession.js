// State permainan: waiting, running, ended
export const STATE = Object.freeze({
  WAITING : 'waiting',
  RUNNING : 'running',
  ENDED : 'ended',
})

// Action untuk transisi state
export const ACTION = Object.freeze({
  START : 'start',
  TIMEOUT : 'timeout',
  RESET : 'reset'
})

// Aturan transisi state
const TRANSITIONS = {
  [STATE.WAITING]: {
    [ACTION.START]: STATE.RUNNING,    
  },
  [STATE.RUNNING]: {
    [ACTION.TIMEOUT]: STATE.ENDED,  
  },
  [STATE.ENDED]: {
    [ACTION.RESET]: STATE.WAITING,  
  },
}

// Fungsi untuk transisi 
export function transisi (currentState, action) {
    const nextState = TRANSITIONS[currentState]?.[action]

    return nextState ?? currentState
}

