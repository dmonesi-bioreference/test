import { useEffect } from 'react';
import { useTheme } from 'styled-components';

import { getCssVariables } from 'styles';

export function ApplyThemeRootVariables() {
  const theme = useTheme();

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
