const getMeaning = document.querySelector('#enter-button');
const meaning = document.querySelector('.text');
const speech = document.querySelector('.speech');
const phonetics = document.querySelector('.phonetics');
const wrapper = document.querySelector('.wrapper');
const word = document.querySelector('.word');

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

getMeaning.addEventListener('click', function() {

    const wordEntered = document.querySelector('#input-tx').value;

    fetch(`${url}${wordEntered}`)
        .then( res => res.json())
        .then(data => {
            console.log(data);
            word.innerHTML = `${data[0].word}`;
            speech.innerHTML = `${data[0].meanings[0].partOfSpeech}`
            phonetics.innerHTML = `${data[0].phonetic}`
            meaning.innerHTML = `${data[0].meanings[0].definitions[0].definition}`
        })
});