export default function Intro({
  setStartGame,
}: {
  setStartGame: (value: boolean) => void;
}) {
  return (
    <div id="intro">
      <div className="intro-margin">
        <h1>America flag quiz</h1>
        <h3>Rules</h3>
        <ul>
          <li>Test is time limited - 60s</li>
          <li>
            Click on <span className="green">Evaluate test !</span> when you're
            done
          </li>
          <li>
            Once you're out of time, the test will be evaulated automatically
          </li>
        </ul>
        <button onClick={() => setStartGame(true)} className="startbutton">
          Start Game
        </button>
      </div>
    </div>
  );
}
