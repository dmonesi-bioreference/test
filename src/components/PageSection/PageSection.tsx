import clsx from 'clsx';

import { ContainerProps } from 'components/Container/Container';
import { Typography } from 'components/Typography';

import PageSectionStyled from './PageSection.styles';

export interface PageSectionProps extends ContainerProps {
  title?: string;
}

/**
 * @description PageSection provides a <section> element with an optional title.
 * This component extends the Container generic component.
 * @param title The h2 title to display above the content.
 * @returns A header and children container.
 */
const PageSection: React.FC<PageSectionProps> = (props) => {
  return (
    <PageSectionStyled
      className={clsx('page-section', props.narrow && 'narrow')}
    >
      {props.title && (
        <header>
          <Typography type="heading" level="2">
            {props.title}
          </Typography>
        </header>
      )}
      <div className="page-section__content">{props.children}</div>
    </PageSectionStyled>
  );
};

export default PageSection;
