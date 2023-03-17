import { createLoader } from './loader';

import getPlanets from './api';

document.addEventListener('DOMContentLoaded', () => {
  createLoader();

  getPlanets();
});
