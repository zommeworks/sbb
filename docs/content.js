$('.grid').masonry({
  itemSelector: '.grid-item',
  //columnWidth: 408
});

const fac = new FastAverageColor();
const prime_img = document.querySelector('#main_img');
fac.getColorAsync(prime_img)
    .then(color => {
        document.documentElement.style.setProperty('--color-prime', color.rgba);
        console.log(color.rgba);
    })
    .catch(e => {
        console.log(e);
    });
