import { createContext, useContext, useState } from 'react'

const CycleContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setCycle } = useContext(CycleContext)

  function setActivaCycle() {
    setCycle((prevState) => prevState + 1)
  }
  return (
    <>
      <h1>NewCycleForm {activeCycle}</h1>
      <button onClick={setActivaCycle}>alterar</button>
    </>
  )
}

function CountDown() {
  const { activeCycle, setCycle } = useContext(CycleContext)

  return <h1>CountDown {activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setCycle] = useState(0)
  return (
    <CycleContext.Provider value={{ activeCycle, setCycle }}>
      <div>
        <NewCycleForm />
        <CountDown />
      </div>
    </CycleContext.Provider>
  )
}
