import { hello_world } from '../../src/main';

describe('hello_world', () => {
    it('should return "Hello World"', () => {
        expect(hello_world()).toEqual("Hello World")
    });
});
