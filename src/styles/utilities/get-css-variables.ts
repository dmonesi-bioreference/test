/* eslint-disable security/detect-object-injection */
import get from 'lodash/get';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import kebabCase from 'lodash/kebabCase';

import { defaultTheme } from 'styles';

const DOT_SEPARATOR = '.';
const DASH_SEPARATOR = '-';

export function getKeypaths<Value>(
  valueArrayOrObject: Value | Value[] | Record<string, Value>
): string[] {
  let keypathFragments = [] as string[];

  if (Array.isArray(valueArrayOrObject)) {
    for (const item of valueArrayOrObject) {
      keypathFragments = [...keypathFragments, ...getKeypaths(item)];
    }
  } else if (isObject(valueArrayOrObject)) {
    for (const key of Object.keys(valueArrayOrObject)) {
      const item = valueArrayOrObject[key];

      if (item) {
        keypathFragments = [
          ...keypathFragments,
          key,
          ...getKeypaths(item)
            .filter((isPresent) => isPresent)
            .map((fragment) => [key, fragment].join(DOT_SEPARATOR)),
        ];
      }
    }
  }

  return keypathFragments;
}

export function getCssVariables(
  theme: typeof defaultTheme
): Record<'name' | 'value', string>[] {
  const variables = [] as Record<'name' | 'value', string>[];

  for (const keyPath of getKeypaths(theme)) {
    const value = get(theme, keyPath) as unknown;
    const name = keyPath
      .split(DOT_SEPARATOR)
      .map(kebabCase)
      .join(DASH_SEPARATOR);

    if (value && !isObject(value) && isString(value)) {
      variables.push({ name, value });
    }
  }

  return variables;
}
