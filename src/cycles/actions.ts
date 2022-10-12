import { Cycle } from './../context/CycleContext'
/* eslint-disable no-unused-vars */

export enum ActionType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENR_CYCLE_AS_FINISHED = 'MARK_CURRENR_CYCLE_AS_FINISHED',
}

export function aaddNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionType.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionType.MARK_CURRENR_CYCLE_AS_FINISHED,
  }
}
