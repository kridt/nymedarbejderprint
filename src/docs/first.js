import React from "react";
import img from "./image1.jpg";
import "./first.scss";

export default function First({ lønnummer, navn }) {
  return (
    <div style={{ display: "grid", gridArea: "1/1/2/2" }}>
      <div style={{ gridArea: "1/1/2/2" }} className="img">
        <img src={img} alt="et" />
      </div>
      <div
        className="page1"
        style={{ gridArea: "1/1/2/2", marginLeft: "7.5em" }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ color: "#d36360" }}>
          Vi har glædet os rigtig meget til at byde dig velkommen!
        </h1>
        <p>
          Du bliver en del af vores fantastiske hold bestående af 150 kolleger,
          som altid er klar til at hjælpe dig med eventuelle spørgsmål.
        </p>
        <br />
        <p>
          <strong>Spørgsmål angpående</strong>
        </p>

        <p>
          Arbejdsplaner, vagtbytte, ferie, personaletøj og andre ting i
          dagligdagen.
        </p>
        <p>Kontakt din nærmeste leder:</p>
        <p>Mikkel Kirckhoff Eller Christian Nielsen</p>
        <p>Tlf: 43 66 50 11 eller 43 66 50 12</p>
        <br />
        <p>
          Fejl på lønseddel, problemer med login til div. apps, problemer med
          din personlige chip o.lign. Kontakt din service- og personalechef:
        </p>
        <p>Kirstine Andersen</p>
        <p>Tlf: 43 66 50 10 / kirstine.andersen@foetex.dk</p>
        <p>Derudover kan du altid tage fat i din Trainer, via mitføtex.</p>
        <br />
        <p>
          <strong>HR-info:</strong>
        </p>
        <p>
          På mitføtex har du adgang til myHRsupport. Det er din direkte linje
          til vores HR-afdeling.
        </p>
        <p>
          Her kan du bl.a. se løn- og skatteforhold, få udbetalt din
          fritvalgskonto og se div. Personaleordninger.
        </p>
        <p>
          SMS ”myHRsupport” til 1245 eller tilgå i mitføtex (du finder det under
          "medarbejder" i højre side).
        </p>

        <br />
        <p>
          <strong>Lønnummer</strong>
        </p>
        <p>Dit lønnummer/personID: {lønnummer}</p>
      </div>
    </div>
  );
}
