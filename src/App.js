import { useEffect, useState } from "react";
import axios from "axios"

async function getdata() {
  try {
    const response = await axios.get("https://random-colors-lovat.vercel.app/")
    return response.data
  } catch { }
}
function App() {
  const [score, setScore] = useState(0);
  const [tryGuess, setTryGuess] = useState(0)
  const [data, setData] = useState([])


  useEffect(() => {
    getdata().then((data) => {
      setData(data)
    })
  }, [])

  return (
    <>

      {(data.length !== 0 && data.length > tryGuess) ?
        <>
          {console.log("test")}
          <div style={{ background: data[tryGuess].color }} className={`w-[100px] h-[100px]`}></div>
          {data[tryGuess].answers.map((answ) => {
            return <button key={answ} className="mx-4" onClick={() => {
              if (answ === data[tryGuess].color) {
                setScore(score + 1)
              }
              setTryGuess(tryGuess + 1)
            }}>{answ}</button>
          })}
        </> : <div>
          {score} / {data.length}
        </div>
      }

    </>
  );
}

export default App;
