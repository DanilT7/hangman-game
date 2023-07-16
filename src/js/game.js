import { WORDS } from "./consts"

export const startGame = () => {
    const randomIndex = Math.floor(Math.random()*WORDS.length);
    const wordToGuess = WORDS[randomIndex]
    // localStorage.setItem('word', wordToGuess);
    sessionStorage.setItem('word', wordToGuess);
}