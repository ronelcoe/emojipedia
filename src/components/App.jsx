import React from "react";
import emoji from "../emojipedia";
import Entry from "./Entry";

function createEmoji(emoji) {
  return (
    <Entry
      key={emoji.id}
      name={emoji.name}
      icon={emoji.emoji}
      details={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emoji.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
