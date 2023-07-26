document.addEventListener('DOMContentLoaded', () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
      <li className="gallery-item">
        <img src="${image.url}" alt="${image.alt}" className="gallery-img"/>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
});

// Ten kod dodaje event listener, który słucha zdarzenia "DOMContentLoaded". Kiedy to zdarzenie zostanie wywołane, kod wykonuje się wewnątrz funkcji strzałkowej.

// Wewnątrz tej funkcji znajduje się tablica obiektów "images" zawierająca informacje o zdjęciach - ich URL i tekst alternatywny.

// Następnie, za pomocą metody "querySelector" wybierany jest element o klasie "gallery".

// Kolejnym krokiem jest utworzenie kodu HTML za pomocą metody "map", który będzie zawierał elementy "li" z obrazkami "img" i atrybutami "src" i "alt". Elementy te następnie są złączane w jeden ciąg znaków za pomocą metody "join".

// Na koniec, kod HTML jest dodawany do elementu "gallery" za pomocą metody "insertAdjacentHTML" i umieszczany na końcu tego elementu.

// W rezultacie, po załadowaniu strony, zostaje wygenerowana galeria zawierająca obrazy pobrane z podanych URL-i.