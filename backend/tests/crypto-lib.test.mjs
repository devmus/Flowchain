import { describe, it, expect, beforeEach } from 'vitest';
import { createHash } from '../utilities/crypto-lib.mjs';

describe('Hashing', () => {
  it('should produce a hash with supplied arguments', () => {
    expect(createHash('bitcoin', 'solana')).toEqual(
      createHash('bitcoin', 'solana')
    );
  });
  it('should produce a hash with supplied arguments in any order', () => {
    expect(createHash('bitcoin', 'solana')).toEqual(
      createHash('solana', 'bitcoin')
    );
  });
});
