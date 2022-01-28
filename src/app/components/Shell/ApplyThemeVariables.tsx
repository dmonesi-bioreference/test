import { useContext } from 'react';
import { useEffect } from 'react';
import { ThemeContext } from 'styled-components';

import { getCssVariables } from 'styles';

export function ApplyThemeRootVariables() {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    for (const definition of getCssVariables(theme)) {
      document.documentElement.style.setProperty(
        `--${definition.name}`,
        definition.value
      );
    }
  }, [theme]);

  return null;
}
