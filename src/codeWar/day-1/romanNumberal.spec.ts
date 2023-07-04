import { romanNumberal } from './romanNumberal.ts';

describe('solution', function () {
  it('should handle small numbers', function () {
    expect(romanNumberal(1)).toEqual('I');
    expect(romanNumberal(2)).toEqual('II');
    expect(romanNumberal(3)).toEqual('III');
    expect(romanNumberal(4)).toEqual('IV');
    expect(romanNumberal(5)).toEqual('V');
    expect(romanNumberal(9)).toEqual('IX');
    expect(romanNumberal(10)).toEqual('X');
    expect(romanNumberal(11)).toEqual('XI');
    expect(romanNumberal(19)).toEqual('XIX');
    expect(romanNumberal(22)).toEqual('XXII');
    expect(romanNumberal(15)).toEqual('XV');
  });

  it('should handle large numbers', function () {
    expect(romanNumberal(1000)).toEqual('M');
    expect(romanNumberal(1001)).toEqual('MI');
    expect(romanNumberal(1990)).toEqual('MCMXC');
    expect(romanNumberal(2007)).toEqual('MMVII');
    expect(romanNumberal(2008)).toEqual('MMVIII');
  });
});
