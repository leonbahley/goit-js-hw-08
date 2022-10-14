import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import galleryTpl from '../templates/gallery.hbs';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');

function createGalleryMarkup(gallery) {
  return gallery.map(galleryTpl).join('');
}

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
