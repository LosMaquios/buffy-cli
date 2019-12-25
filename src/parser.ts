type ProgramInput = string[]
type ProgramArgument = string
type ProgramOption = string | {
  name: string
  value: any
}

interface ProgramInputParsed {
  cmd: string
  args: ProgramArgument[]
  opts: ProgramOption[]
}

const OPTION_TOKEN = '-'
const OPTION_TOKEN_REGEX = new RegExp(`^${OPTION_TOKEN}{1,2}`)

function getOptionName (option: string) {
  return option.replace(OPTION_TOKEN_REGEX, '')
}

function parseInput (input: ProgramInput, strict: boolean) {
  const parsed: ProgramInputParsed = {
    cmd: input[0],
    args: [],
    opts: []
  }

  if (input.length > 1) {
    const { length } = input

    for (let i = 1; i < length; i++) {
      const current = input[i]

      if (!current.startsWith(OPTION_TOKEN)) {
        if (strict && parsed.opts.length) {
          throw new Error('[strict parsing] arguments goes before options')
        }

        parsed.args.push(current)
      } else {
        const next = input[i + 1]
        let pendingOption: ProgramOption = getOptionName(current)

        if (next && !next.startsWith(OPTION_TOKEN)) {
          pendingOption = {
            name: current,
            value: next
          }

          i++
        }

        parsed.opts.push(pendingOption)
      }
    }
  }

  return parsed
}

export {
  // Types
  ProgramInput,
  ProgramArgument,
  ProgramOption,
  ProgramInputParsed,

  // API
  parseInput
}
