const createHeader = () => {
  
  const html = `
    <h1 class="text">Star Wars Planets</h1>
  `;

  const header = document.createElement('header');
  header.classList.add('header');
  header.insertAdjacentHTML('afterbegin', html);

  return header;
};

export default createHeader;
