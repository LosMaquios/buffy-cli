import { ARGUMENTS_METADATA_SYMBOL } from '../shared'

interface ArgumentOptions {
  type: 'string' | 'number' | 'boolean'
  description: string
  required: boolean
}

interface ArgumentInfo extends ArgumentOptions {
  name: string
  index: number
}

const defaultOptions: ArgumentOptions = {
  type: 'string',
  description: '',
  required: false
}

function Arg (name: string, options?: ArgumentOptions): ParameterDecorator {
  options = Object.assign({}, defaultOptions, options)

  return (target, propertyKey, parameterIndex) => {
    const argsInfo: ArgumentInfo[] = Reflect
      .getOwnMetadata(ARGUMENTS_METADATA_SYMBOL, target, propertyKey) ?? []

    // Set merged options
    argsInfo.push({
      name,
      index: parameterIndex,
      ...options
    })

    Reflect.defineMetadata(ARGUMENTS_METADATA_SYMBOL, argsInfo, target, propertyKey)
  }
}

export {
  // Types
  ArgumentOptions,
  ArgumentInfo,

  // API
  Arg
}
