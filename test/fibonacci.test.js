import { describe, expect, it } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('fibonacci', () => {
  it('lanza un RangeError para números negativos', () => {
    expect(() => fibonacci(-1)).toThrowError(
      new RangeError('solo números enteros ≥ 0')
    );
  });

  it.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [5, 5],
    [10, 55],
  ])('fibonacci(%i) devuelve %i', (n, esperado) => {
    expect(fibonacci(n)).toBe(esperado);
  });
});