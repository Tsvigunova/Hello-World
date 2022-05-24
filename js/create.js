let nameOfAuthorInput = document.getElementById('name_of_author');
let nameOfSongInput = document.getElementById('name_of_song');
let textOriginalInput = document.getElementById('text_original');
let textTranslateInput = document.getElementById('text_translate');
let imageForSongInput = document.getElementById('image_for_song');
let youtubeLinkInput = document.getElementById('youtube_link');
const createFormSubmitButton = document.querySelector('.create_form-submit');
const now = new Date().toLocaleDateString(); 
const localStorageKey = 'data';

createFormSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const author = nameOfAuthorInput.value,
        song = nameOfSongInput.value,
        originalText = textOriginalInput.value,
        translateText = textTranslateInput.value,
        image = imageForSongInput.value,
        youtubeLink = youtubeLinkInput.value;

    if(author && song && originalText && translateText && image && youtubeLink) {
        const data = {
            author,
            song,
            originalText,
            translateText,
            image: imageForSongInput.files[0].name,
            youtubeLink,
            date: now
        };    

        const dataList = JSON.parse(localStorage.getItem('data')) ?? [];
        dataList.unshift(data);
        localStorage.setItem(localStorageKey, JSON.stringify(dataList)); 
    } else {
        alert("error");
    }
    
    clearInputs();
});

const clearInputs = () => {
    nameOfAuthorInput.value = '';
    nameOfSongInput.value = '';
    textOriginalInput.value = '';
    textTranslateInput.value = '';
    imageForSongInput.value = '';
    youtubeLinkInput.value = '';
};

