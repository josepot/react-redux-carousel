import R from 'ramda';
import React from 'react';
import connector from './connector';

import reducer, { INITIAL_STATE } from './reducers';
import './styles.css';

const carousel = ({
  relevantSlides, nSlides, activeSlide,
  styles: { arrowButton, container, slideButtons, slidesContainer },
  onTransitionEnd, onMoveTo, onNext, onPrev,
}) => (
  <div className="carousel" style={ container }>
    <div className="slidesArea">
      <div onClick={ onNext } className="circle" style={ arrowButton }>
        &larr;
      </div>
        <ul style={ slidesContainer }>
        {
          relevantSlides.map(({ src, id, style, alt }, idx) =>
            <li
              style={ style }
              key={ idx }
              onTransitionEnd={
                () => style.left === '0px' && onTransitionEnd()
              }
            >
              <img src={ src } alt={ alt }/>
            </li>
          )
        }
        </ul>
      <div onClick={ onPrev } className="circle" style={ arrowButton }>
        &rarr;
      </div>
    </div>
    <ul className="slideButtons" style={ slideButtons.area }>
      {
        R.range(0, nSlides).map(id =>
          <li
            key={ id }
            className="circle"
            onClick={ () => id !== activeSlide && onMoveTo(id, id > activeSlide ? 1 : -1) }
            style={ slideButtons.button }>
          </li>
        )
      }
    </ul>
  </div>
);

export default connector(
  carousel, 'carousel', reducer,
  ({ slides }) => R.assoc('nSlides', slides.length, INITIAL_STATE)
);
