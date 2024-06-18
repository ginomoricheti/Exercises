type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}



const HangmanWord = ({ 
  guessedLetters,
  wordToGuess,
  reveal = false
}: HangmanWordProps) => {

  return (
    <div className="
      flex gap-1
      text-8xl
      font-semibold
      uppercase
      font-mono
      mb-10"
    >
      {wordToGuess.split('').map((letter, index) => (
        <span key={index} className="mx-5 min-h-5 border-b-8 border-slate-900">
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord