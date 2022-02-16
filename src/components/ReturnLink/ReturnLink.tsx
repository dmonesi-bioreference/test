import { useRouter } from 'next/router';

import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Typography } from 'components/Typography';

import ReturnLinkStyled from './ReturnLink.styles';

export interface ReturnLinkProps {
  label?: string;
  href?: string;
}

const ReturnLink: React.FC<ReturnLinkProps> = ({ href, label = 'Return' }) => {
  const router = useRouter();
  return (
    <ReturnLinkStyled>
      <Button
        kind="link-small"
        href={href || undefined}
        onClick={() => (href ? router.push(href) : router.back())}
      >
        <div className="return-link__label">
          <Icon
            name="chevron-left"
            size="small"
            color="primary"
            style="solid"
          />
          <Typography type="body" color="primary">
            {label}
          </Typography>
        </div>
      </Button>
    </ReturnLinkStyled>
  );
};

export default ReturnLink;
