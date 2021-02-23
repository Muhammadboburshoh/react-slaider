import { useEffect, useState } from "react"

import "./Slider.css"

function Slider () {

  const [index, setIndex] = useState(0)

  useEffect( () => {

    document.documentElement.style.setProperty("--index", index)
  },[index,])

  return (
    <div className="container">
      <div className="section">
        <ul className="slaider">
          <li className="slider__item">1</li>
          <li className="slider__item">2</li>
          <li className="slider__item">3</li>
          <li className="slider__item">4</li>
          <li className="slider__item">5</li>
          <li className="slider__item">6</li>
          <li className="slider__item">7</li>
          <li className="slider__item">8</li>
        </ul>
      </div>
      <button onClick={e => setIndex(index - 1)}>Orqga</button>
      <button onClick={e => setIndex(index + 1)}>oldinga</button>
    </div>

  )
}

export default Slider