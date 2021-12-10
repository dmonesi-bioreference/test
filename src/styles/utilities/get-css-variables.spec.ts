import * as Tokens from 'styles/tokens';

import { getCssVariables, getKeypaths } from './get-css-variables';

describe('getCssVariables', () => {
  it('creates kebab-case names for camelCased ones', () => {
    const cssVars = getCssVariables(Tokens);

    expect(cssVars).toContainEqual({
      name: 'tokens-color-background-default',
      value: Tokens.tokens.colorBackgroundDefault,
    });
  });
});

describe('getKeypaths', () => {
  it('ignores empty keys', () => {
    const keys = getKeypaths({ margin: '' });

    expect(keys).not.toContain('margin');
  });

  it('gets the keys of an object', () => {
    const keys = getKeypaths({ margin: '22px' });

    expect(keys).toContain('margin');
  });

  it('works with nested values', () => {
    const keys = getKeypaths({ shadows: { inset: '1px 1px #000', drop: '' } });

    expect(keys).toContain('shadows.inset');
    expect(keys).not.toContain('shadows.drop');
  });

  it('expands arrays', () => {
    const keys = getKeypaths([{ margin: '12px' }]);

    expect(keys).toContain('margin');
  });
});
