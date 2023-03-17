
import arrow from '../assets/arrow.svg';

const createSlide = ({
  name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population
}) => {

  const html = `
    <span class="slide__main"><b>${name}</b></span>
    <span class="slide__humidity">Rotation period: <b>${rotation_period} h</b></span>
    <span class="slide__humidity">Orbital period<b>${orbital_period} day</b></span>
    <span class="slide__humidity">Diameter: <b>${diameter} km</b></span>
    <span class="slide__humidity">Climate: <b>${climate}</b></span>
    <span class="slide__humidity">Gravity: <b>${gravity}</b></span>
    <span class="slide__humidity">Terrain: <b>${terrain}</b></span>
    <span class="slide__humidity">Surface water <b>${surface_water}%</b></span>
    <span class="slide__humidity">Population: <b>${population} М</b></span>
  `;

  const slide = document.createElement('li');
  slide.classList.add('slide');
  slide.insertAdjacentHTML('afterbegin', html);

  return slide;
};

const createSlider = (results) => {
  const slider = document.createElement('ul');
  slider.classList.add('slider');
  results.map((item) => slider.append(createSlide(item)));
  return slider;
};

export const createButton = (slider, isNext) => {
  const button = document.createElement('button');
  button.classList.add('button');
  if (isNext) {
    button.classList.add('button_next');
  }
  const html = `<img class="sunset__arrow button__img ${isNext ? 'button__img_next' : ''}" src="${arrow}">`;
  button.insertAdjacentHTML('afterbegin', html);

  const slideWidth = slider.querySelector('.slide').offsetWidth;

  button.addEventListener('click', () => {
    slider.scrollTo({
      top: 0,
      left: Math.floor(slider.scrollLeft) + (isNext ? slideWidth : -slideWidth),
      behavior: 'smooth',
    });
  });

  return button;
};

export default createSlider;
