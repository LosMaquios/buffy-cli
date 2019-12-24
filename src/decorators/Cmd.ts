import {
  COMMANDS_METADATA_SYMBOL,
  ARGUMENTS_METADATA_SYMBOL
} from '../shared'
import { ArgumentOptions } from './Arg'

interface CommandOptions {
  name: string
  description: string
  deprecated: boolean
}

const defaultOptions: CommandOptions = {
  name: '',
  description: '',
  deprecated: false
}

function Cmd (options?: Partial<CommandOptions>): MethodDecorator {
  options = Object.assign({}, defaultOptions, options)

  return (target, propertyKey: string, { value: execCommand }) => {
    const commandName = options.name || propertyKey

    const commandsMap: Map<string, {
      argsInfo: ArgumentOptions[],
      exec: (...args: any[]) => any
    }> = Reflect.getOwnMetadata(COMMANDS_METADATA_SYMBOL, target, propertyKey) ?? new Map()

    commandsMap.set(commandName, {
      argsInfo: Reflect.getOwnMetadata(ARGUMENTS_METADATA_SYMBOL, target, propertyKey),
      exec (...args) {
        (execCommand as any).call(target, ...args)
      }
    })
  }
}

export {
  // Types
  CommandOptions,

  // API
  Cmd
}
