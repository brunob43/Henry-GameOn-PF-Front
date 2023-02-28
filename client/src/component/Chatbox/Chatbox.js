import { useState } from "react";
import styles from "./index.module.css";

export default function ChatBox() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [engResult, setEngResult] = useState()

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("https://back-henrygame.up.railway.app/chatbot/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });
      console.log(animalInput);
      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      const traduccion = data.result;
      setAnimalInput("");
      console.log(traduccion, "traduccion al ingles");
      try {
        const response = await fetch("https://back-henrygame.up.railway.app/chatbot/generate2", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ animal: traduccion }),
        });

        const data = await response.json();
        if (response.status !== 200) {
          throw (
            data.error ||
            new Error(`Request failed with status ${response.status}`)
          );
        }

        const aTraducir = data.result;
        setEngResult(aTraducir)
        console.log(aTraducir, "respuesta en ingles");
        try {
          const response = await fetch("https://back-henrygame.up.railway.app/chatbot/generate3", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ animal: aTraducir }),
          });

          const data = await response.json();
          if (response.status !== 200) {
            throw (
              data.error ||
              new Error(`Request failed with status ${response.status}`)
            );
          }

          setResult(data.result);
          console.log(data.result, "respuesta en español");
        } catch (error) {
          // Consider implementing your own error handling logic here
          console.error(error);
          alert(error.message);
        }
      } catch (error) {
        // Consider implementing your own error handling logic here
        console.error(error);
        alert(error.message);
      }
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>chat javascript</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an question"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div className={styles.result}>{engResult}</div>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
