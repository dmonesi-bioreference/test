import React from 'react';
import PropTypes from 'prop-types';
import IconStyled from './Icon.styles';

import IconAdd from '../../icons/add.svg';
import IconArrowdown from '../../icons/arrowdown.svg';
import IconChat from '../../icons/chat.svg';
import IconCheckmark from '../../icons/checkmark.svg';
import IconClose from '../../icons/close.svg';
import IconDate from '../../icons/date.svg';
import IconEmail from '../../icons/email.svg';
import IconError from '../../icons/error.svg';
import IconExpand from '../../icons/expand.svg';
import IconInfo from '../../icons/info.svg';
import IconLock from '../../icons/lock.svg';
import IconNoentry from '../../icons/noentry.svg';
import IconOverflow from '../../icons/overflow.svg';
import IconSearch from '../../icons/search.svg';
import IconSignout from '../../icons/signout.svg';
import IconTrash from '../../icons/trash.svg';
import IconUpload from '../../icons/upload.svg';

const Icon = ({ name }) => {
  const icons = {
    add: IconAdd,
    arrowdown: IconArrowdown,
    chat: IconChat,
    checkmark: IconCheckmark,
    close: IconClose,
    date: IconDate,
    email: IconEmail,
    error: IconError,
    expand: IconExpand,
    info: IconInfo,
    lock: IconLock,
    noentry: IconNoentry,
    overflow: IconOverflow,
    search: IconSearch,
    signout: IconSignout,
    trash: IconTrash,
    upload: IconUpload,
  };

  const IconComponent = icons[name];

  return (
    <IconStyled>
      <IconComponent />
    </IconStyled>
  );
};

export const iconArray = [
  '--',
  'add',
  'arrowdown',
  'chat',
  'checkmark',
  'close',
  'date',
  'edit',
  'email',
  'error',
  'expand',
  'info',
  'lock',
  'noentry',
  'overflow',
  'search',
  'signout',
  'trash',
  'upload',
];

Icon.propTypes = {
  name: PropTypes.oneOf(iconArray).isRequired,
};

Icon.defaultProps = {};

export default Icon;
