import R from 'ramda';
import internalStateConnector from 'react-redux-internal-state';

import { actionCreators } from './actions';
import {
  getSlidesDimensions, getArrowButtonStyle, getSlideButtonsStyle,
} from './dimensions';
import stateToProps from './queries';

const styleSlide = (width, height, slides) => relevantSlide => ({
  id: relevantSlide.id,
  src: slides[relevantSlide.id],
  style: {
    left: (width * relevantSlide.position) + 'px',
    width: width + 'px',
    height: height + 'px',
    transitionDuration: relevantSlide.transitionDuration,
    transitionProperty: relevantSlide.transitionProperty,
  }
});

const mergeProps = (
  { relevantSlides, transitionDuration, activeSlide }, // queriedProps
  dispatchProps, // dispatchers
  { width, height, slides }, // own props
) => {
  const slidesDimensions = getSlidesDimensions(width, height, slides.length);
  return {
    activeSlide,
    relevantSlides: relevantSlides
      .map(styleSlide(slidesDimensions.width, slidesDimensions.height, slides)),
    nSlides: slides.length,
    styles: {
      arrowButton: getArrowButtonStyle(width, slidesDimensions.height),
      slideButtons: getSlideButtonsStyle(width, height, slidesDimensions.height, slides.length),
      slidesContainer: R.map(x => x + 'px', slidesDimensions),
      container: { width: width + 'px', height: height + 'px' },
    },
    ...dispatchProps,
  };
};

export default internalStateConnector(stateToProps, actionCreators, mergeProps);
