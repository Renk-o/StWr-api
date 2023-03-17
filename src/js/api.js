
import { removeLoader } from './loader';

import create404 from './404';
import createWidget from './widget';

const getPlanets = async () => {
  const data = await fetch(`https://swapi.dev/api/planets/`);
  const json = await data.json();
  
  await removeLoader();

  if (data.ok) {
    createWidget(json);
  } else {
    create404();
  }
};

export default getPlanets;