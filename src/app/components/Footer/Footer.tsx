import React from 'react';

import { useAppTranslation } from 'app/components/Shell/hooks';
import { Button } from 'components/Button';
import { ButtonProps } from 'components/Button/Button';
import { Logo } from 'components/Logo';
import { Typography } from 'components/Typography';

import FooterStyled from './Footer.styles';

const Footer: React.FC = () => {
  const t = useAppTranslation();

  const links: Array<FooterLink> = [
    {
      label: t('components.footer.links.contactUs'),
      url: 'https://www.genedx.com/contact',
      target: '_blank',
    },
    {
      label: t('components.footer.links.terms'),
      url: '/terms-and-conditions',
    },
    {
      label: t('components.footer.links.privacy'),
      url: 'https://www.genedx.com/privacy',
      target: '_blank',
    },
  ];

  return (
    <FooterStyled>
      <Button kind="image" href="/">
        <Logo width={110} />
      </Button>
      <div className="footer__info-links">
        {links.map((link, index) => (
          <Button
            key={index}
            kind="link-extra-small"
            href={link.url}
            color="default"
            target={link.target}
          >
            {link.label}
          </Button>
        ))}
        <Button
          kind="link-extra-small"
          color="default"
          className="ot-sdk-show-settings"
        >
          {t('components.footer.links.cookie')}
        </Button>
      </div>
      <Typography type="fine-print">
        {t('components.footer.copyright')}
      </Typography>
    </FooterStyled>
  );
};

interface FooterLink {
  label: string;
  url: string;
  target?: ButtonProps['target'];
}

export default React.memo(Footer);
