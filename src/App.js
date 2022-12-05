import { useState } from "react"
import Button from "./components/Button";
import star from "./images/icon-star.svg"
import thanks from "./images/thank-you.svg"

function App() {
  const [rate, setRate] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleSubmit() {
    if (rate !== 0) {
      setSubmited(true)
    }
  }
  return (
    <div className="bg-main-very-dark-blue min-h-screen pt-[170px]">
      <div className="bg-gradient-to-r from-main-gray1 to-main-gray2 w-[327px] h-[360px] sm400:w-[412px] sm400:h-[416px] rounded-large mx-auto p-6">
        {submited &&
          <div className="text-center mt-[34px]">
            <img alt="fav" src={thanks} className="mx-auto mb-6" />
            <button className="text-main-orange text-xsm sm400:text-sm mb-6">You selected {rate} out of 5</button>
            <h1 className="text-white text-xl sm400:text-2xl font-bold mb-[10px]">Thank you!</h1>
            <p className="text-xsm sm400:text-sm text-main-gray-light">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
          </div>
        }
        {!submited &&
          <div>
            <button className="bg-main-dark-blue rounded-full p-4 sm400:mb-[30px] mb-[16px]">
              <img alt="fav" src={star} className="" />
            </button>
            <h1 className="text-white font-bold text-xl sm400:text-2xl mb-[7px]">How did we do?</h1>
            <p className="text-main-gray-light text-xsm sm400:text-sm mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="flex justify-between sm400:mb-8 mb-6">
              {[1, 2, 3, 4, 5].map((num) => {
                return <Button text={num} setRate={setRate} rate={rate} key={num} />
              })}
            </div>
            <button
              className="bg-main-orange hover:bg-white hover:text-main-orange text-white font-bold tracking-wide text-xsm sm400:text-sm block w-full rounded-full h-[45px]"
              onClick={handleSubmit}
            >SUBMIT</button>
          </div>
        }
      </div>
    </div >
  );
}

export default App;
