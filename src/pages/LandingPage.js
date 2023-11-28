import { useRef, useState } from "react";
import "../App.css";
import First from "../docs/first.js";
import { useReactToPrint } from "react-to-print";
import Sec from "../docs/sec";
import Third from "../docs/Third";
import Fourth from "../docs/Fourth";
import Fifth from "../docs/Fifth";

export default function LandingPage() {
  const [medarbejderNavn, setMedarbejderNavn] = useState("");
  const [medarbejderLøn, setMedarbejderLøn] = useState();
  const [closestLeader, setClosestLeader] = useState(
    "Mikkel Kirckhoff Eller Julie Brink"
  );
  const [afdeling, setAfdeling] = useState("Service");
  const [closestLeaderNumber, setClosestLeaderNumber] = useState(
    "43 66 50 11 / 43 66 50 12"
  );

  const printstuff = useRef();
  const handlePrint = useReactToPrint({
    content: () => printstuff.current,
    documentTitle: "Velkomstbrev",
    onAfterPrint: () => alert("yay"),
  });

  function changeDepartment(e) {
    e.preventDefault();

    if (e.target.value === "1") {
      setClosestLeader("Mikkel Kirckhoff Eller Christian Nielsen");
      setClosestLeaderNumber("43 66 50 11 / 43 66 50 12");
      setAfdeling("Service");
    }
    if (e.target.value === "2") {
      setClosestLeader("Nesrin Gür eller Seval Sahin");
      setClosestLeaderNumber("43 66 50 20 / 43 66 50 21");
      setAfdeling("Nonfood");
    }
    if (e.target.value === "3") {
      setClosestLeader("Daniel Angleys eller Biniam Fertihaison");
      setClosestLeaderNumber("43 66 50 30 / 43 66 50 31");
      setAfdeling("Fresh");
    }
  }

  return (
    <div className="App">
      <h3>Lidt info om den nye medarbejder</h3>
      <form>
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

        <div>
          <label>Afdeling: </label>
          <select onChange={(e) => changeDepartment(e)}>
            <option value="1">Service</option>
            <option value="2">Nonfood</option>
            <option value="3">Fresh</option>
          </select>
        </div>

        <br />
      </form>
      <button onClick={handlePrint}>Print med de valgte info</button>

      <div
        style={{
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
        }}
        ref={printstuff}
      >
        <First
          leader={closestLeader}
          leaderNumber={closestLeaderNumber}
          lønnummer={medarbejderLøn}
          navn={medarbejderNavn}
        />
        <Sec />
        <Third
          navn={medarbejderNavn}
          lønnummer={medarbejderLøn}
          afdeling={afdeling}
        />
        <Fourth />
        <Fifth navn={medarbejderNavn} />
      </div>
    </div>
  );
}
