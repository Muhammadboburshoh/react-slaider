import { useEffect, useState } from "react"

import "./Search.css"

function Search () {

  const data = [
    "Muhammad",
    "Abdulloh",
    "Abdurahmon",
    "Umar",
    "Abdukarim",
    "Sirojiddin",
    "Ayubxon",
    "Muhammadjavohir",
    "Kamoliddin"
  ]

  const [filter, setFilter] = useState("")

  const [filtered, setFiltered] = useState([])

  useEffect(() => {

    const match = new RegExp(filter, "i")

    if(filter.length) {
      setFiltered(data.filter(f => f.match(match)))
    } else {
      setFiltered(data)
    }

  }, [filter])
  console.log(filter);

  return(
    <div className="search">
      <input onChange={
        e => {
          setFilter(e.target.value)
        }
      } className="search-input" type="text" />

      {
        filtered.length && <ul>
          {
            filtered.map((fruit, i) => {
              return <li key={i}>{fruit}</li>
            })
          }
        </ul>
      }
    </div>
  )
}
export default Search