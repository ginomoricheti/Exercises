import { useState, useEffect, useCallback } from "react"
import words from "./wordlist.json"
import "./index.css"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

const App = () => {

  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return
    
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  },
  [guessedLetters, isWinner, isLoser]
)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)
  
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters, addGuessedLetter])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)
  
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])
  

  return (
    <div className="max-w-800px flex flex-col gap-2 mx-0 my-auto items-center">
      <div className="text-3xl text-center">
        {isWinner && "Winner! - Enter to play again"}
        {isLoser && "Nice try 🥺 - Enter to try again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div className=" self-stretch">
        <Keyboard
          disabled = {isWinner || isLoser }
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  )
}

export default App