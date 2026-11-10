import { describe, expect, it } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido', () => {
    it.each([
        [null, false],
        [undefined, false],
        ['', false],
        ['123', false],
        ['12345', false],
        ['1234567', false],
        ['12a4', false],
        ['1111', false],
        ['000000', false],
        ['1234', true],
        ['0123', true],
        ['123456', true],
    ])('esPinValido(%s) devuelve %s', (pin, esperado) => {
        expect(esPinValido(pin)).toBe(esperado);
    });
});
        