
import { useState } from "react";

const guests = [
  { name: "Sara", seat: 4 },
  { name: "Omar", seat: 9 },
  { name: "Hina", seat: 2 }
];

function Guest({ name, seat }) {
  return (
    <div className="guest">
      <span>{name}</span>
      <span>Seat {seat}</span>
    </div>
  );
}

function App() {
  const [name, setName] = useState("");
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [message, setMessage] = useState("");

  function handleFind(event) {
    event.preventDefault();

    if (name.trim() === "") {
      setMessage("Type a name");
      return;
    }

    const found = guests.find(
      (guest) =>
        guest.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (found) {
      setSelectedGuest(found);
      setMessage("");
    } else {
      setSelectedGuest(null);
      setMessage("Not on the list");
    }
  }

  return (
    <div className="page">
      <style>{`
        * {
          box-sizing: border-box;
        }

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f1f2f6;
  color: #333;
}

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        header {
          background: purple;
          color: white;
          text-align: center;
          padding: 25px;
        }

        main {
          width: 90%;
          max-width: 500px;
          margin: 30px auto;
          flex: 1;
        }

        section {
          background: white;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 10px;
        }

        .guest {
          display: flex;
          justify-content: space-between;
          padding: 12px;
          margin: 8px 0;
          background: #eeeeff;
          border-radius: 6px;
        }

        input {
          width: 100%;
          padding: 12px;
          margin-bottom: 12px;
          border: 1px solid #aaa;
          border-radius: 5px;
          font-size: 16px;
        }

        button {
          width: 100%;
          padding: 12px;
          background: purple;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background: #5c005c;
        }

        .card {
          border: 2px dashed purple;
          padding: 15px;
          border-radius: 8px;
        }

        .message {
          color: red;
          margin-top: 12px;
        }

        footer {
          background: purple;
          color: white;
          text-align: center;
          padding: 15px;
        }

        h2 {
  margin-top: 0;
  color: #333;
}
      `}</style>

      <header>
        <h1>Muhammad Arslan</h1>
        <p>The Gate</p>
      </header>

      <main>
        <section>
          <h2>The Wall</h2>

          {guests.map((guest) => (
            <Guest
              key={guest.name}
              name={guest.name}
              seat={guest.seat}
            />
          ))}
        </section>

        <section>
          <h2>The Desk</h2>

          <form onSubmit={handleFind}>
            <input
              type="text"
              placeholder="Enter guest name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <button type="submit">Find</button>
          </form>

          {message && <p className="message">{message}</p>}
        </section>

        <section>
          <h2>The Card</h2>

          {selectedGuest && (
            <div className="card">
              <Guest
                name={selectedGuest.name}
                seat={selectedGuest.seat}
              />
            </div>
          )}
        </section>
      </main>

      <footer>
        Roll Number: 247344
      </footer>
    </div>
  );
}

export default App;
