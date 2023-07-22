import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</li>`
  )
  .join("");
listRef.insertAdjacentHTML("beforeend", markup);

listRef.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();

  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}"/>`);
  instance.show();

  if (instance.visible()) {
    listRef.addEventListener("keydown", onEsc);
  }

  function onEsc(e) {
    if (e.code === "Escape") {
      listRef.removeEventListener("keydown", onEsc);
      instance.close();
    }
  }
}
