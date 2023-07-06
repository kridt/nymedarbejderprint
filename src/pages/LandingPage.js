import { useRef, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import First from "../docs/first.js";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import Sec from "../docs/sec";

export default function LandingPage() {
  const [medarbejderNavn, setMedarbejderNavn] = useState("");
  const [medarbejderLøn, setMedarbejderLøn] = useState();
  const navigation = useNavigate();
  const printstuff = useRef();
  const handlePrint = useReactToPrint({
    content: () => printstuff.current,
    documentTitle: "Velkomstbrev",
    onAfterPrint: () => alert("yay"),
  });

  function fetchDocxFiles() {
    fetch("/documents/1. Velkomstbrev.docx")
      .then((res) => res.text())
      .then((data) => console.log(data));
  }

  function printingTime(e) {
    e.preventDefault();

    fetchDocxFiles();

    /*  const data = {
      navn: medarbejderNavn,
      løn: medarbejderLøn,
    };
    console.log(medarbejderNavn);
    console.log(medarbejderLøn);
    localStorage.setItem("nyeMedarbejder", JSON.stringify(data));
    navigation("/print"); */
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

      <div
        style={{
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
        }}
        ref={printstuff}
      >
        <First lønnummer={medarbejderLøn} />
        <Sec />
      </div>
      <button onClick={handlePrint}>asdasdasd</button>
    </div>
  );
}
