import { ARGUMENTS_METADATA_SYMBOL } from '../shared'

interface ArgumentOptions {
  type: 'string' | 'number' | 'boolean'
  description: string
  required: boolean
}

const defaultOptions: ArgumentOptions = {
  type: 'string',
  description: '',
  required: false
}

function Arg (name: string, options?: ArgumentOptions): ParameterDecorator {
  options = Object.assign({}, defaultOptions, options)

  return (target, propertyKey, parameterIndex) => {
    const argsInfo: (ArgumentOptions & { name: string })[] = Reflect
      .getOwnMetadata(ARGUMENTS_METADATA_SYMBOL, target, propertyKey) ?? []

    // Set merged options
    argsInfo[parameterIndex] = {
      name,
      ...options
    }

    Reflect.defineMetadata(ARGUMENTS_METADATA_SYMBOL, argsInfo, target, propertyKey)
  }
}

export {
  // Types
  ArgumentOptions,

  // API
  Arg
}
