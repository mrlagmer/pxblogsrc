const numberOfBloks = 16,
      w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight,
      bloksContainer = d.querySelector('.bloks'),
      blokColors = [ '#379956'], // Color for each section
      sections = Array.from(document.querySelectorAll('section'));

function injectCssAndMarkup() {
  const head = d.head || d.getElementsByTagName('head')[0],
        style = d.createElement('style'),
        leftValues = getLeftValues(numberOfBloks, x),
        topValues = getRandomValues(numberOfBloks, 200),
        delayValues = getRandomValues(numberOfBloks, 15);
  
  style.type = 'text/css';
  const css = getBlokCSS(numberOfBloks, y, leftValues, topValues, delayValues);
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  bloksContainer.innerHTML = getBlokMarkup(numberOfBloks);
}

function getBlokMarkup(blokNum) {
  let bloks = [];
  for(let i = 0; i < numberOfBloks; i++) {
    bloks.push(`<div class="blok blok${i+1}"></div>`);
  }
  return bloks.join('\n');
}

function getRandomValues(blokNum, maxVal) {
  let values = [];
  for(let i = 0; i < blokNum; i++) {
    values.push(Math.floor((maxVal / blokNum) * (i)));
  }
  return values.sort(function() { return 0.5 - Math.random() });
}

function getLeftValues(blokNum, screenWidth) {
  let values = [];
  for(let i = 0; i < blokNum; i++) {
    values.push(Math.floor((screenWidth / blokNum) * (i + 0.5)));
  }
  return values;
}

function getBlokCSS(blokNum, screenHeight, left, top, delay) {
  let css = [];
  for(let i = 0; i < blokNum; i++) {
    let duration = (screenHeight - (-top[i]))/50;
    css.push(`
      .blok${i+1} {
        left: ${left[i]}px;
        top: -${top[i]}px;
        animation-delay: ${delay[i]}s;
        animation: blok ${duration}s infinite;
        animation-timing-function: linear;
      }
    `);
  }
  return css.join('\n');
}


injectCssAndMarkup();