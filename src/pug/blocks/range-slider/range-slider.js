import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

import './range-slider.scss';

const slider = document.querySelector('.range-slider__bar');
let sliderValue = document.querySelector('.range-slider__value');

noUiSlider.create(slider, {
  start: [5000, 10000],
  connect: true,
  step: 500,
  range: {
    min: [0],
    max: [15000],
  },
});

slider.noUiSlider.on('update', function (values) {
  let min = Math.round(values[0]).toLocaleString(),
    max = Math.round(values[1]).toLocaleString();

  sliderValue.innerHTML = `${min}₽ - ${max}₽`;
});
