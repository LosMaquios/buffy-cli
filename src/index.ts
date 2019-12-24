import 'reflect-metadata'

import { Program } from './decorators/Program'
import { Cmd } from './decorators/Cmd'
import { Arg } from './decorators/Arg'

@Program()
class TestCLI {

  @Cmd()
  start (
    @Arg('test') test: string
  ) {

  }
}

const test = new TestCLI()

test.start('asfa')
