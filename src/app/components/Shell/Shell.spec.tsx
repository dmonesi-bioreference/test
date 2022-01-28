import { render } from '@testing-library/react';
import styled, { useTheme } from 'styled-components';

import { resources } from 'localization/resources';
import { getTheme, themes } from 'styles';

import { Shell } from './Shell';
import { useAppTranslation } from './hooks';

test('Loading the shell adds css variables to the document', async () => {
  const app = render(<Shell>Loaded</Shell>);

  await app.findByText('Loaded');

  expect(
    global.document.documentElement.style.getPropertyValue(
      '--colors-background'
    )
  ).toEqual(getTheme('defaultTheme').colors.background);
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
    background-color: ${({ theme }) => theme.colors.background};
  `;

  function ThemeDiagnostics() {
    const theme = useTheme();

    return <FancyButton>{theme.colors.background}</FancyButton>;
  }

  const app = render(
    <Shell>
      <ThemeDiagnostics />
    </Shell>
  );

  await app.findByText(themes.defaultTheme.colors.background);
});

test('Shell wrappers provide access to i18n helpers', async () => {
  function I18nDiagnostics() {
    const t = useAppTranslation();
    return <>{t('application.title')}</>;
  }

  const app = render(
    <Shell>
      <I18nDiagnostics />
    </Shell>
  );

  await app.findByText(resources.en.translation.application.title);
});
