const mainImage = document.getElementById('mainSubwayLine');
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');

const infoButton = document.getElementById('infoButton');
const modalOverlay = document.getElementById('modalOverlay');
const modalImage = document.getElementById('modalImage');

const newImageUrls = {
    'ORIGINAL': 'https://raw.githubusercontent.com/yoonj1yae/platform-data/main/subway_line.png',
    
    'A': 'https://raw.githubusercontent.com/yoonj1yae/platform-data/main/1_1.png',
    'B': 'https://raw.githubusercontent.com/yoonj1yae/platform-data/main/1_2.png',
    'C': 'https://raw.githubusercontent.com/yoonj1yae/platform-data/main/1_3.png',
    'D': 'https://raw.githubusercontent.com/yoonj1yae/platform-data/main/1_4.png'
};

function changeImage(newUrl) {
    mainImage.src = newUrl;
}

button1.addEventListener('mouseover', () => changeImage(newImageUrls.A));
button1.addEventListener('mouseout', () => changeImage(newImageUrls.ORIGINAL));

button2.addEventListener('mouseover', () => changeImage(newImageUrls.B));
button2.addEventListener('mouseout', () => changeImage(newImageUrls.ORIGINAL));

button3.addEventListener('mouseover', () => changeImage(newImageUrls.C));
button3.addEventListener('mouseout', () => changeImage(newImageUrls.ORIGINAL));

button4.addEventListener('mouseover', () => changeImage(newImageUrls.D));
button4.addEventListener('mouseout', () => changeImage(newImageUrls.ORIGINAL));

infoButton.addEventListener('click', function() {
    modalOverlay.style.display = 'flex'; 
  
    setTimeout(() => { 
        modalOverlay.classList.add('show');
    }, 10);
});

modalOverlay.addEventListener('click', function(event) {
    if (event.target !== modalImage) {
        modalOverlay.classList.remove('show');

        modalOverlay.addEventListener('transitionend', function handler() {
            modalOverlay.style.display = 'none';
            modalOverlay.removeEventListener('transitionend', handler);
        });
    }
});