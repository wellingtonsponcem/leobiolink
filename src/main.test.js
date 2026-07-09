import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { calculateGradientCoords } from './main';

describe('Testes baseados em propriedades para o cálculo do gradiente', () => {
  
  it('Propriedade: posX deve estar sempre entre 40 e 60, e posY sempre entre -30 e -10', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: -1000, max: 5000 }), // clientX que pode estar fora dos limites da tela
        fc.integer({ min: -1000, max: 5000 }), // clientY
        fc.integer({ min: 1, max: 3840 }),     // largura da tela válida (> 0)
        fc.integer({ min: 1, max: 2160 }),     // altura da tela válida (> 0)
        (clientX, clientY, innerWidth, innerHeight) => {
          const { posX, posY } = calculateGradientCoords(clientX, clientY, innerWidth, innerHeight);

          // Verifica se posX e posY são números finitos válidos (sem NaN ou Infinity)
          expect(Number.isFinite(posX)).toBe(true);
          expect(Number.isFinite(posY)).toBe(true);

          // A matemática da função garante posX entre 40% e 60% e posY entre -30% e -10%
          expect(posX).toBeGreaterThanOrEqual(40);
          expect(posX).toBeLessThanOrEqual(60);

          expect(posY).toBeGreaterThanOrEqual(-30);
          expect(posY).toBeLessThanOrEqual(-10);
        }
      )
    );
  });

  it('Propriedade: Entrada de dimensões nulas ou negativas deve retornar coordenadas seguras e válidas', () => {
    fc.assert(
      fc.property(
        fc.integer(), // clientX arbitrário
        fc.integer(), // clientY arbitrário
        fc.integer({ max: 0 }), // largura <= 0
        fc.integer({ max: 0 }), // altura <= 0
        (clientX, clientY, innerWidth, innerHeight) => {
          const { posX, posY } = calculateGradientCoords(clientX, clientY, innerWidth, innerHeight);

          // Garante que o sistema calcula a posição sem quebrar com divisão por zero ou NaN
          expect(Number.isNaN(posX)).toBe(false);
          expect(Number.isNaN(posY)).toBe(false);
          
          expect(posX).toBeGreaterThanOrEqual(40);
          expect(posX).toBeLessThanOrEqual(60);

          expect(posY).toBeGreaterThanOrEqual(-30);
          expect(posY).toBeLessThanOrEqual(-10);
        }
      )
    );
  });
});
