import R from 'ramda';
/*
 _____________________________________________________
 |     |                                        |     |
 |  P  |                                        |  N  |
 |  R  |                                        |  E  |
 |  E  |                                        |  X  |
 |  V  |                                        |  T  |
 |     |                                        |     |
 |  B  |                 SLIDE                  |  B  |
 |  U  |                                        |  U  |
 |  T  |                                        |  T  |
 |  T  |                                        |  T  |
 |  O  |                                        |  O  |
 |  N  |                                        |  N  |
 |     |                                        |     |
 -----------------------------------------------------|
 |                                                    |
 |                   SLIDE BUTTONS                    |
 |                                                    |
 ------------------------------------------------------
 */
const PROPORTIONS = {
  ARROW_BUTTONS_WIDTH: 1/12,
  SLIDE_BUTTONS_HEIGHT: 1/6,
  SLIDE_BUTTONS_TOP_BOTTON_MARGINS: 1/6,
};
const ARROW_BUTTONS_LATERAL_MARGIN = 5;
const SLIDE_BUTTONS_MIN_LATERAL_PADDING = 5;

export const getSlidesDimensions = R.memoize((width, height, nSlides) => ({
  width: width * (1 - (PROPORTIONS.ARROW_BUTTONS_WIDTH * 2)),
  height: height * (1 - PROPORTIONS.SLIDE_BUTTONS_HEIGHT),
}));

export const getArrowButtonStyle = R.memoize((width, slidesHeight) => {
  const size = (width * PROPORTIONS.ARROW_BUTTONS_WIDTH);
  return {
    width: (size - (ARROW_BUTTONS_LATERAL_MARGIN * 2)) + 'px',
    height: (size - (ARROW_BUTTONS_LATERAL_MARGIN * 2)) + 'px',
    margin: ((slidesHeight - size) / 2) + 'px ' + ARROW_BUTTONS_LATERAL_MARGIN + 'px',
  };
});

export const getSlideButtonsStyle = R.memoize((width, height, slidesHeight, nSlides) => {
  const areaHeight = height - slidesHeight;
  const paddingTop = PROPORTIONS.SLIDE_BUTTONS_TOP_BOTTON_MARGINS * areaHeight;
  const slideButtonsMaxHeight = areaHeight - (paddingTop * 2);
  const slideButtonsMaxWidth =
    (width - (SLIDE_BUTTONS_MIN_LATERAL_PADDING * 2)) / nSlides;
  const slideButtonsSize = R.min(slideButtonsMaxWidth, slideButtonsMaxHeight);
  return {
    area: {
      height: areaHeight + 'px',
      paddingTop: paddingTop + 'px',
    },
    button: {
      margin: (slideButtonsSize * 1/6) + 'px',
      width: (slideButtonsSize * 5/6) + 'px',
      height: (slideButtonsSize * 5/6) + 'px',
    },
  };
});
