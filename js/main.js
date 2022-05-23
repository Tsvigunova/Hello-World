// let nameOfAuthorInput = document.getElementById('name_of_author');
// let nameOfSongInput = document.getElementById('name_of_song');
// let textOriginalInput = document.getElementById('text_original');
// let textTranslateInput = document.getElementById('text_translate');
// let imageForSongInput = document.getElementById('image_for_song');
// let youtubeLinkInput = document.getElementById('youtube_link');
// const createFormSubmitButton = document.querySelector('.create_form-submit');
// const now = new Date().toLocaleDateString(); 
// const localStorageKey = 'data';

// createFormSubmitButton.addEventListener('click', (e) => {
//     e.preventDefault();

//     const data = {
//         author: nameOfAuthorInput.value,
//         song: nameOfSongInput.value,
//         originalText: textOriginalInput.value,
//         translateText: textTranslateInput.value,
//         image: imageForSongInput.files[0].name,
//         youtubeLink: youtubeLinkInput.value,
//         date: now
//     };    


//     localStorage.setItem(localStorageKey, JSON.stringify(data)); 
// });

localStorage.getItem('data'); 

