import { playAccordion } from './accordion.js';
import { isValid } from './form.js';
import { navOpen, subOpen } from './nav.js';
import { selectChange } from './select.js';
import { sliderHero, sliderNews, sliderPrograms, sliderReviews } from './slider.js';

navOpen();
subOpen();
sliderHero();
sliderPrograms();
sliderNews();
playAccordion();
sliderReviews();
selectChange();
isValid();
