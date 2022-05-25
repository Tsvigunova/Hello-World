const data = JSON.parse(localStorage.getItem('data')) ?? [];
const mainItemsList = document.querySelector('.main__items');

const generateList = () => {
    mainItemsList.innerHTML = "";

    data.forEach((item, i) => {
        
	    mainItemsList.innerHTML += `
            <div class="main__item">
                <div class="main__inner">
                    <div>
                        <img src="D:\\Programming\\Hello World!\\img\\${item.image}" class="main__item-image">
                    </div>
                    <a href="item.html?id=${i+1}" class="main__item-title">
                        <span class="name_of_author">${item.author}</span> - 
                        <span class="name_of_song">${item.song}</span>
                    </a>
                </div>
            </div>
        `;
    });
};

generateList();

