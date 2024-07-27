import { useState } from 'react'
import './App.css'
import icon from '../src/assets/icon.png'
import lighting from '../src/assets/thunder.png'
import bear from '../src/assets/bear.png'
import comet from '../src/assets/comet.png'
import rocket from '../src/assets/rocket.png'
import gift from '../src/assets/gift.png'
import sparkles from '../src/assets/sparkles.png'

function App() {
  const [count, setCount] = useState(0)
  const [points, setPoints] = useState(1000000)
  const [energy, setEnergy] = useState(500)
  const incerement = () => {
   setPoints(points + 1)
   setEnergy(energy - 1)
  }
  return (
    <div className='screen'>
      <h6 className='title'>Tap coin</h6>

      <h5 className='all_coin'>{points.toLocaleString()}</h5>

      <button className='tap_button' onClick={incerement}>
      <img src={icon} alt="icon" className='icon'/>
      </button>

      <h6 className='residual'>
        <img src={lighting} alt="lightning" className='lightning'/>
        500/{energy}
      </h6>

      <div className='buttons'>
        <button>
          <img src={bear} alt="bear" />
          <p>Ref</p>
        </button>

        <button>
          <img src={gift} alt="gift" />
          <p>Earn</p>
        </button>

        <button>
          <img src={comet} alt="tap" />
          <p>Tap</p>
        </button>

        <button>
          <img src={rocket} alt="rocket" />
          <p>Boost</p>
        </button>

        <button>
          <img src={sparkles} alt="sparkles" />
          <p>Status</p>
        </button>
      </div>

    </div>
  )
}

export default App
