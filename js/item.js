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
            <div class="item__media-image">
                <img src="D:\\Programming\\Hello World!\\img\\${item.image}" class="item-image">
            </div>
            <div class="item__media-video">
                <div id="player"></div>
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

    inItPlayer();
};

const inItPlayer = () => {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    const v = new URL(item.youtubeLink).searchParams.get('v');

    let player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: v,
            playerVars: {
            'playsinline': 1
            }
        });
    }
};

pageItem();
