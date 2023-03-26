import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems){ 
    return galleryItems.map(({preview, original, description}) => {
        return `<li class = "gallery__item"><a class="gallery__link" href = "${original}" target = "_self"><img class = "gallery__image" src="${preview}" data-source = "${original}" alt = "${description}"/></a></li>`;
    }).join('');
};

galleryList.addEventListener('click', handleImgClick);
function handleImgClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`)
    instance.show();
}








// console.log();
