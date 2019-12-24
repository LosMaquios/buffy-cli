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

  }
}

export {
  // Types
  ProgramOptions,

  // API
  Program
}
