import { SpinnerOverlay } from '.';

export default {
  component: SpinnerOverlay,
  title: 'Components/Spinner Overlay',
  parameters: {
    componentSubtitle:
      'Overlays a Spinner during blocking indeterminate loading operations.',
  },
};

export const Primary = () => <SpinnerOverlay />;

Primary.parameters = {
  controls: { hideNoControlsWarning: true },
};
