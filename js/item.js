const id = new URLSearchParams(window.location.search).get('id');
if (!id) {
    window.location = "index.html";
}

const data = JSON.parse(localStorage.getItem('data')) ?? [];
const item = data[id-1];
const itemInner = document.querySelector('.item__inner');

const pageItem = () => {
    itemInner.innerHTML = `
        <div class="item__media">
            <div id="test">
                
            </div>
            <div class="item__media-video">
                ${item.youtubeLink}
            </div>
        </div>
        <div class="item__textarea">
            <div class="item__title">${item.author} - ${item.song}</div>
            <div class="item__text">
                <div class="text_original-left">${item.originalText}</div>
                <div class="text_translate-right">${item.translateText}</div>
            </div>
        </div>
    `;

    const test = document.body;
    
    test.style.background = `url('img/${item.image}') no-repeat top center`;
    test.style.backgroundSize = '60%';
};

pageItem();
