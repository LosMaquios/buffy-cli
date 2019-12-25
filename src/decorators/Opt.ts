interface OptionOptions {
  needValue: boolean
}

const defaultOptions: OptionOptions = {
  needValue: false
}

function Opt (name: string, options?: Partial<OptionOptions>): ParameterDecorator {
  options = Object.assign({}, defaultOptions, options)

  return (target, propertyKey, parameterIndex) => {

  }
}

export {
  // Types
  OptionOptions,

  // API
  Opt
}
