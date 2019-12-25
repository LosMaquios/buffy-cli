import { parseInput, ProgramInput } from '../parser'

interface ProgramOptions {
  headerTemplate: string
  footerTemplate: string
  usageTemplate: string
}

const defaultOptions: ProgramOptions = {
  headerTemplate: '',
  footerTemplate: '',
  usageTemplate: 'Commands usage:'
}

function Program (options?: Partial<ProgramOptions>): ClassDecorator {
  options = Object.assign({}, defaultOptions, options)

  return target => {
    target.prototype.$init = (input: ProgramInput) => {
      const parsed = parseInput(input)
    }
  }
}

export {
  // Types
  ProgramOptions,

  // API
  Program
}
