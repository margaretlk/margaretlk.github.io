const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgsArr = ['ethel1.jpeg','ethel2.jpeg','ethel3.webp','ethel4.jpeg','ethel5.jpeg']
/* Declaring the alternative text for each image file */
const alts = {
    'ethel1.jpeg' : 'ethel cain in her room with an american flag',
    'ethel2.jpeg' : 'ethel cain lounging on a blue sofa',
    'ethel3.webp' : 'ethel cain in her bedroom, sitting on her bed',
    'ethel4.jpeg' : 'ethel cain playing with an old tv',
    'ethel5.jpeg' : 'ethel cain looking at the camera while smoking'
}

/* Looping through images */

for (const image of imgsArr) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
