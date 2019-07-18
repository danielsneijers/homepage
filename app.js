const title = document.getElementById('title');
const cursor = document.getElementById('cursor');
const titles = [
  'product manager',
  'guitar player',
  'Dutch guy in Stockholm',
  'father of 2',
  'tech nerd',
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

