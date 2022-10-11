import Button from './Button'
import RevealAnimate from './RevealAnimate'
import FadeUp from './FadeUp'

export default function Work(props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 py-12 gap-y-12">
      <div>
        <RevealAnimate>
          <img
            src={`images/${props.imageName}`}
            className="rounded-xl"
            alt=""
          />
        </RevealAnimate>
      </div>
      <div className={props.classContent}>
        <RevealAnimate>
          <h1 className="mt-4 text-5xl font-bold">{props.title}</h1>
        </RevealAnimate>
        <FadeUp delay='0.75'>
          <p className="uppercase mt-4 text-sm tracking-widest">{props.type}</p>
        </FadeUp>
        <FadeUp delay='0.75'>
          <p className="mt-10 font-medium text-lg">{props.content}</p>
        </FadeUp>
        <Button btnName="View project"></Button>
      </div>
    </div>
  )
}
