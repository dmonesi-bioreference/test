import React from 'react';
import PropTypes from 'prop-types';

const Main = ({
  children,
}) => {
  return (
    <main className="o-main">
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

Main.defaultProps = {
};

export default Main;
