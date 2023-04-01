import { Collapse, Fade, Grow, Slide, Zoom, SlideProps } from '@mui/material';
import React from 'react';

type TransitionTypes = 'collapse' | 'fade' | 'grow' | 'slide' | 'zoom';

interface IWithAnimationHoc {
  children: React.ReactNode | any;
  type: TransitionTypes;
  slideDirection?: SlideProps['direction'];
}

export const WithAnimation: React.FC<IWithAnimationHoc> = (
  props,
): JSX.Element => {
  let { children, type, slideDirection = 'up' } = props;

  const renderChildren = (type: TransitionTypes) => {
    switch (type) {
      case 'collapse':
        return <Collapse in={true}>{children}</Collapse>;
      case 'fade':
        return <Fade in={true}>{children}</Fade>;
      case 'grow':
        return <Grow in={true}>{children}</Grow>;

      case 'slide':
        return (
          <Slide
            direction={slideDirection}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            {children}
          </Slide>
        );
      case 'zoom':
        return <Zoom in={true}>{children}</Zoom>;
    }
  };

  return <>{renderChildren(type)}</>;
};
