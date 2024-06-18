import alphabet from "../alphabet.json";
import styles from "../styles/Keyboard.module.css"

const KEYS: string[] = alphabet;

type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
  disabled?: boolean
}

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {

  return (
    <div style={{gridTemplateColumns: "repeat( auto-fit, minmax(75px, 1fr)"}} className="grid gap-2">
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  );
};

export default Keyboard