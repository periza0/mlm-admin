import { useState } from "react";

export default function Admin() {
  const [name, setName] = useState("");
  const [achievement, setAchievement] = useState("");

  const addPlayer = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/ach",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            achievements: [achievement],
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Player Added!");

      setName("");
      setAchievement("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "100px" }}>
      <h1>Admin Panel</h1>

      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Achievement"
        value={achievement}
        onChange={(e) =>
          setAchievement(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={addPlayer}>
        Add Player
      </button>
    </div>
  );
}