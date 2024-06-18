

const HEAD = (
  <div className="absolute w-20 h-20 border-[10px] border-slate-900 rounded-full"></div>
)

const BODY = (
  <div className="absolute top-[79px] left-[36px] h-[125px] w-[10px] bg-slate-900"></div>
)

const LEFT_ARM = (
  <div className="absolute top-[80px] left-[7px] h-[80px] w-[10px] bg-slate-900 rotate-45"></div>
)

const RIGHT_ARM = (
  <div className="absolute top-[80px] left-[65px] h-[80px] w-[10px] bg-slate-900 -rotate-45"></div>
)

const LEFT_LEG = (
  <div className="absolute top-[189px] left-[7px] h-[80px] w-[10px] bg-slate-900 rotate-45"></div>
)

const RIGHT_LEG = (
  <div className="absolute top-[189px] left-[65px] h-[80px] w-[10px] bg-slate-900 -rotate-45"></div>
)

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
}


const HangmanDrawing = ({ numberOfGuesses } : HangmanDrawingProps ) => {

  return (
    <div className="relative my-10">
      <div className="h-[10px] w-[250px] bg-slate-900"></div>
      <div className="absolute h-[75px] w-[10px] left-[240px] bg-slate-900"></div>
      <div className="h-[450px] w-[10px] bg-slate-900"></div>
      <div className="absolute h-[10px] w-[250px] left-[-125px] bg-slate-900"></div>
      <div className="relative top-[-376px] left-[204px] bg-slate-400">
        {BODY_PARTS.slice(0, numberOfGuesses)}
      </div>
    </div>
  )
}

export default HangmanDrawing