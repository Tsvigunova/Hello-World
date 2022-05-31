const id = new URLSearchParams(window.location.search).get('id');
if (!id) {
    window.location = "index.html";
}

let player;
const data = JSON.parse(localStorage.getItem('data')) ?? [];
const item = data[id-1];
const itemInner = document.querySelector('.item__inner');

const pageItem = () => {
    const itemImage = document.querySelector('.item__media-image');
    const itemTitle = document.querySelector('.item__title');
    const textOriginal = document.querySelector('.text-original');
    const textTranslate = document.querySelector('.text-translate');

    itemImage.innerHTML = `<img src="D:\\Programming\\Hello World!\\img\\${item.image}" class="item-image">`;
    itemTitle.innerHTML = `${item.author} - ${item.song}`;
    textOriginal.innerHTML = `${item.originalText}`;
    textTranslate.innerHTML = `${item.translateText}`; 
};

function loadVideoScript() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
    const videoId = new URL(item.youtubeLink).searchParams.get('v');

    player = new YT.Player('player', {
        videoId: videoId,
        playerVars: {
            'playsinline': 1
        },
    });
}

pageItem();
loadVideoScript();