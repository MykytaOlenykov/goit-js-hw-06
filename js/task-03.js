const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("ul.gallery");

const markup = images
  .map((img) => `<li><img src="${img.url}" alt="${img.alt}" /></li>`)
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", markup);

// add styles ------------------------------

// styles for list
const listStylesGallery = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "40px",
  margin: "0",
  padding: "0",
  listStyle: "none",
};

const nameListStylesGallery = Object.keys(listStylesGallery);

nameListStylesGallery.forEach(
  (nameListStyle) =>
    (galleryRef.style[nameListStyle] = listStylesGallery[nameListStyle])
);

// styles for img
const imgStylesGallery = {
  display: "block",
  height: "auto",
  width: "100%",
};

const itemsGalleryEl = galleryRef.children;

const nameImgStylesGallery = Object.keys(imgStylesGallery);

for (const itemEl of itemsGalleryEl) {
  itemEl.style.margin = "auto";

  const imgEl = itemEl.querySelector("img");

  nameImgStylesGallery.forEach(
    (nameImgStyles) =>
      (imgEl.style[nameImgStyles] = imgStylesGallery[nameImgStyles])
  );
}
