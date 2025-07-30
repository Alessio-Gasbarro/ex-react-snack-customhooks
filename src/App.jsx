import useSwitch from "./useSwitch"
import useDate from "./useDate"
import useCustomPointer from "./useCustomPointer";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>

      <hr />

      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>

      <hr />

      <h1>Sposta il mouse per vedere il cursore custom!</h1>
      {customPointer}
    </div>
  )
}

export default App;