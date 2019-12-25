import { parseInput, ProgramInput } from '../parser'

interface ProgramOptions {
  strict: boolean
  headerTemplate: string
  footerTemplate: string
  usageTemplate: string
}

const defaultOptions: ProgramOptions = {
  strict: false,
  headerTemplate: '',
  footerTemplate: '',
  usageTemplate: 'Commands usage:'
}

function Program (options?: Partial<ProgramOptions>): ClassDecorator {
  options = Object.assign({}, defaultOptions, options)

  return target => {
    target.prototype.$init = (input: ProgramInput) => {
      const parsed = parseInput(input, options.strict)


    }
  }
}

export {
  // Types
  ProgramOptions,

  // API
  Program
}
