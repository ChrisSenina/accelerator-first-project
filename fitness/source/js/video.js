export function findVideos() {
  const videos = document.querySelectorAll('.about__video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  const link = video.querySelector('.about__link');
  const media = video.querySelector('.about__cover');
  const button = video.querySelector('.about__button');
  const id = parseMediaURL(media);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('about__video--enabled');
}

function parseMediaURL(media) {
  const regexp = /img\/about\/about-mobile\.jpg/i;
  const url = media.src;
  const match = url.match(regexp);

  return match;
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('about__cover');
  iframe.loading = 'lazy';

  return iframe;
}

function generateURL() {
  const query = '9TZXsZItgdw?si=8px8KtZwPRRuyLnO';

  return `https://www.youtube.com/embed/${query}&autoplay=1`;
}
