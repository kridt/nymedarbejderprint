import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const [medarbejderNavn, setMedarbejderNavn] = useState("");
  const [medarbejderLøn, setMedarbejderLøn] = useState();
  const navigation = useNavigate();

  function printingTime(e) {
    e.preventDefault();
    const data = {
      navn: medarbejderNavn,
      løn: medarbejderLøn,
    };
    console.log(medarbejderNavn);
    console.log(medarbejderLøn);
    localStorage.setItem("nyeMedarbejder", JSON.stringify(data));
    navigation("/print");
  }

  return (
    <div className="App">
      <h3>Lidt info om den nye medarbejder</h3>
      <form onSubmit={(e) => printingTime(e)}>
        <div>
          <label>Navn: </label>
          <input
            type="text"
            onBlur={(e) => setMedarbejderNavn(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Lønnummer: </label>
          <input
            type="number"
            onBlur={(e) => setMedarbejderLøn(parseInt(e.target.value))}
            required
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <button type="submit">Gå videre</button>
      </form>
    </div>
  );
}
