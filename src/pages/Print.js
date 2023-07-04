import React, { useEffect, useState } from "react";
export default function Print() {
  const [info, setInfo] = useState();

  useEffect(() => {
    const data = localStorage.getItem("nyeMedarbejder");

    setInfo(JSON.parse(data));
  }, []);

  console.log(info);
  return (
    <div>
      <p>passer den her information?</p>
      <p>Navn: {info?.navn}</p>
      <p>Lønnummer: {info?.løn}</p>
    </div>
  );
}
