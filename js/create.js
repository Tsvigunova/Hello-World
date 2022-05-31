let nameOfAuthorInput = document.getElementById('name_of_author');
let nameOfSongInput = document.getElementById('name_of_song');
let textOriginalInput = document.getElementById('text-original');
let textTranslateInput = document.getElementById('text-translate');
let imageForSongInput = document.getElementById('image_for_song');
let youtubeLinkInput = document.getElementById('youtube__link');
const createFormSubmitButton = document.querySelector('.create__form-submit');
const localStorageKey = 'data';
const error = document.querySelector('.error');

createFormSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const now = new Date().toLocaleDateString(); 
    const author = nameOfAuthorInput.value;
    const song = nameOfSongInput.value;
    const originalText = textOriginalInput.value;
    const translateText = textTranslateInput.value;
    const youtubeLink = youtubeLinkInput.value;

    error.innerHTML = '';

    if (author && song && originalText && translateText) {
        const data = {
            author,
            song,
            originalText,
            translateText,
            image: imageForSongInput.files.length ? imageForSongInput.files[0].name : '',
            youtubeLink,
            date: now
        };

        const dataList = JSON.parse(localStorage.getItem('data')) ?? [];
        dataList.unshift(data);
        
        localStorage.setItem(localStorageKey, JSON.stringify(dataList)); 
    } else {
        error.innerHTML = 'Fill in all required fields';
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

