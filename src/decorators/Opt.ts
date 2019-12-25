interface OptionOptions {
  needValue: boolean
}

function Opt (name: string, options?: Partial<OptionOptions>): ParameterDecorator {
  return () => {

  }
}

export {
  // Types
  OptionOptions,

  // API
  Opt
}
