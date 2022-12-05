function ButtonCom({ text, setRate, rate }) {
  return <button
    className={`${rate === text ? "bg-main-gray-medium text-white" : "bg-main-dark-blue text-main-gray-medium"} hover:bg-main-orange hover:text-white text-xsm sm400:text-base w-[42px] h-[42px] sm400:w-[51px] sm400:h-[51px] rounded-full`}
    onClick={(e) => setRate(parseInt(e.target.innerText))}
  > {text}</button >
}

export default ButtonCom