import { render } from '@testing-library/react';
import styled, { useTheme } from 'styled-components';

import { resources } from 'localization/resources';
import { themes, tokens } from 'styles';

import { Shell } from './Shell';
import { useAppTranslation } from './hooks';

test('Loading the shell adds css variables to the document', async () => {
  const app = render(<Shell>Loaded</Shell>);

  await app.findByText('Loaded');

  expect(
    global.document.documentElement.style.getPropertyValue(
      '--tokens-color-background'
    )
  ).toEqual(tokens.colorBackground);
});

// background-color: ${tokens.colorWarningHover};
// background-color: var(--tokens-color-warning-hover);
// background-color: var(--tokens-color-warning-hover, ${tokens.colorWarningHover});

// This test will fail in a few odd ways, should the theme not be
// configured correctly.
//
// 1. The fancy button background color will fail to traverse values,
//    and explode.
// 2. The type checker should throw redlines under the theme access
//    attempts.
// 3. The diagnostics component will fail to render the string output
//    of the theme.
//
test('Shell themes are provided to styled components', async () => {
  const FancyButton = styled.button`
    background-color: ${(props) => props.theme.tokens.colorBackground};
  `;

  function ThemeDiagnostics() {
    const theme = useTheme();

    return <FancyButton>{theme.tokens.colorBackground}</FancyButton>;
  }

  const app = render(
    <Shell>
      <ThemeDiagnostics />
    </Shell>
  );

  await app.findByText(themes.light.tokens.colorBackground);
});

test('Shell wrappers provide access to i18n helpers', async () => {
  function I18nDiagnostics() {
    const t = useAppTranslation();
    return <>{t('application')}</>;
  }

  const app = render(
    <Shell>
      <I18nDiagnostics />
    </Shell>
  );

  await app.findByText(resources.en.translation.application);
});
