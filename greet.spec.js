import { greet } from "./greet.js";
describe('test for the greet function', () => {
    it('return the greeting of Thomas', () => {
      const result = greet('Thomas')
      expect(result).toBe('Hello Coach!')
    })
    it('return the greeting of Zach', () => {
      const result = greet('Zach')
      expect(result).toBe('Hello Zach!')
    })
    it('return the greeting of empty value', () => {
        const result = greet()
        expect(result).toBe('Hello stranger!')
      })
  })
