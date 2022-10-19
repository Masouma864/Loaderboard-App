import './style.css';
import postData from './modules/post.js';
import getData from './modules/get.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7thejendiskaoidjd87g87/scores';


const name = document.querySelector('#name');
const score = document.querySelector('#score');
const refresh = document.querySelector('.btn');
const addBtn = document.querySelector('.btn-click');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const leaderObj = {
    user: name.value,
    score: score.value,
  };

  postData(url, leaderObj);

  name.value = '';
  score.value = '';
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  getData(url);
});
