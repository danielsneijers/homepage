const title = document.getElementById('title');
const cursor = document.getElementById('cursor');
const titles = [
  'front-end developer',
  'guitar player',
  'dude',
  'father',
  'gamer',
  'nerd',
  'nice guy'
];

function replaceTitle (node) {
  const content = node.innerHTML;
  const currentTitleIndex = titles.indexOf(content);
  const nextIndex = currentTitleIndex >= 0 && currentTitleIndex + 1 < titles.length ? currentTitleIndex + 1 : 0;

  node.innerHTML = titles[nextIndex];
}

setInterval(() => {
  replaceTitle(title);
}, 4000);

