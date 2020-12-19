import React from 'react';
import Loader from '.';

export default {
  component: Loader,
  title: 'Components/Loader',
};

export const primarySmall = () => <Loader color="primary" size="small" />;

export const primaryMedium = () => <Loader color="primary" size="medium" />;

export const primaryLarge = () => <Loader color="primary" size="large" />;

export const secondarySmall = () => <Loader color="secondary" size="small" />;

export const secondaryMedium = () => <Loader color="secondary" size="medium" />;

export const secondaryLarge = () => <Loader color="secondary" size="large" />;
