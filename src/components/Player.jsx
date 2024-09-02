import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playernameRef = useRef()
  const [playerName, setPlayerName] = useState(null)
 

  
  // function handleNameChange() {
  //   setPlayerName(playernameRef.current.value)
  // }

  function handleSubmit() {
    setPlayerName(playernameRef.current.value)
    playernameRef.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'Unknown entity'}</h2>
      <p>
        <input type="text" ref={playernameRef}  />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );

}
