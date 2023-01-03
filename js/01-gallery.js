import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const itemsMarkup = onClickGallary(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', itemsMarkup)
galleryEl.addEventListener('click',onChangeItems)

function onClickGallary(items) {
  return items.map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
  }).join('')
}


function onChangeItems(event) {
  event.preventDefault();
   if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryEl.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
 
}