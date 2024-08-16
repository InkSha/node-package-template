import { Example } from '../index'

describe('Hello World!', () => {
  const syntax = 'hello'

  test(syntax, () => {
    const hello = new Example(syntax)
    global.console.log = jest.fn()
    hello.say()
    expect(global.console.log).toHaveBeenCalledWith(syntax)
  })
})
