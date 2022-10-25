import './style.css';
import { createGame, addScore, getAllScores } from './Services/API.js';

const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const submitBtn = document.querySelector('.btn');
const refreshBtn = document.querySelector('.refresh');

submitBtn.addEventListener('click', () => {
  if (nameInput.value !== '' && scoreInput.value !== '') {
    addScore(nameInput.value, scoreInput.value);
  } else {
    alert('you have to type name and score');
  }
});

refreshBtn.addEventListener('click', async () => {
  getAllScores();
});

createGame();