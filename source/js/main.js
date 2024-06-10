import { playAccordion } from './accordion.js';
import { isValid, selectChange } from './form.js';
import { selectModalChange, modalOpen, isValidModal } from './modal.js';
import { navOpen, subOpen } from './nav.js';
import { inputMask } from './phone-input.js';
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
isValidModal();
modalOpen();
selectModalChange();
inputMask();

