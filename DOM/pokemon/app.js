const container = document.querySelector('#container');

// newImg.src = "image/1.png";
// container.appendChild(newImg);

for(let i = 1; i < 7; i++) {
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');
  const label = document.createElement('span');
  label.innerText = `#${i}`;
  const newImg = document.createElement('img');
  newImg.src = `image/${i}.png`;

  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}

