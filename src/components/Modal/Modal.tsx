import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';

import { Container } from 'components/Container';
import { IconButton } from 'components/IconButton';
import { Heading } from 'components/Typography';

import ModalStyled from './Modal.styles';

export interface ModalProps {
  /** Set to true to open the modal. */
  opened: boolean;
  /** Specify the onClose event for the modal. */
  onClose: () => void;
  /** Set to true to hide the button which closes the modal. */
  hideCloseButton?: boolean;
  /** Displays a header within modal. */
  header?: string;
  /** Set to true to render the modal full screen. */
  fullscreen?: boolean;
}

const FullscreenModalGlobalStyle = createGlobalStyle`
  body {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
`;

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <ModalStyled
      className={clsx(
        { fullscreen: props.fullscreen },
        { hidden: !props.opened }
      )}
    >
      <Container centered>
        <AnimatePresence>
          {props.opened && (
            <motion.div
              className="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {!props.hideCloseButton && (
                <IconButton
                  label="close"
                  name="x"
                  onClick={props.onClose}
                  color="primary"
                />
              )}
              {props.header && <Heading>{props.header}</Heading>}
              {props.children}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

      {props.fullscreen && <FullscreenModalGlobalStyle />}
    </ModalStyled>
  );
};

export default Modal;
