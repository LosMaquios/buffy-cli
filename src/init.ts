import { ProgramInput, parseInput } from './parser'

function init (input: ProgramInput, programInstance: any) {


  parseInput(input, false)
}

export {
  // API
  init
}
