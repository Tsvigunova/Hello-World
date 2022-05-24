// let data = JSON.parse(localStorage.getItem('data')) ?? [];
// const mainItemsList = document.querySelector('.main__items');

// const generateList = () => {
//     mainItemsList.innerHTML = "";

//     data.forEach((item) => {
        
// 	    mainItemsList.innerHTML += `
//             <div class="main__item">
//                 <div class="main__inner">
//                     <div>
//                         <img src="${item.image}" class="main__item-image">
//                     </div>
//                     <div class="main__item-title">
//                         <span class="name_of_author">${item.author}</span> - 
//                         <span class="name_of_song">${item.song}</span>
//                     </div>
//                 </div>
//             </div>
//         `;
//     });
// };

// generateList();

const id = new URLSearchParams(window.location.search).get('id');
if (!id) {
    window.location = "index.html";
}

const data = JSON.parse(localStorage.getItem('data')) ?? [];
const item = data[id-1];
const itemInner = document.querySelector('.item__inner');

const pageItem = () => {
        itemInner.innerHTML = "";
        
        data.forEach((item) => {
        itemInner.innerHTML += `
            <div class="item__media">
                <div>
                    <img src="${item.image}" class="item__media-image">
                </div>
                <div class="item__media-video">
                    ${item.youtubeLink}
                </div>
            </div>
            <div class="item__textarea">
                <title class="item__title">${item.author - item.song}</title>
                <div class="item__text">
                    <div class="text_original-left">${item.originalText}</div>
                    <div class="text_translate-right">${item.translateText}</div>
                </div>
            </div>
        `
    });
};
