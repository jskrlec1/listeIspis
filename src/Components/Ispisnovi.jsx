// import React, { useState } from "react";

// const Ispisnovi = ({ listaImena }) => {
//   const [names, setNames] = useState(listaImena);

//   return (
//     <div>
//       <ul>
//         {names.map((klijent) => (
//           <li key={klijent.id}>
//             Ime: {klijent.name}, Godine: {klijent.years} years old
//           </li>
//         ))}
//       </ul>
//       <input value={text} onChange={handleChange} />
//       <button
//         onClick={() => {
//           setNames([...names, { id: "f26", name: "Anita", years: 22 }]);
//         }}
//       >
//         Dodaj
//       </button>
//     </div>
//   );
// };

// export default Ispisnovi;
import React, { useState } from "react";

const Ispisnovi = ({ listaImena }) => {
  const [names, setNames] = useState(listaImena);
  const [text, setText] = useState("");
  const [years, setYears] = useState("");

  const handleChangeName = (e) => {
    setText(e.target.value);
  };

  const handleChangeYears = (e) => {
    setYears(e.target.value);
  };

  return (
    <div>
      <ul>
        {names.map((klijent) => (
          <li key={klijent.id}>
            Ime: {klijent.name}, Godine: {klijent.years} years old
          </li>
        ))}
      </ul>
      <div>
        <label>
          Ime:
          <input value={text} onChange={handleChangeName} />
        </label>
        <label>
          Godine:
          <input type="number" value={years} onChange={handleChangeYears} />
        </label>
        <button
          onClick={() => {
            setNames([...names, { id: crypto.randomUUID(), name: text, years: parseInt(years, 10) || 0 },
            ]);
            setText("");
            setYears("");
          }}
        >
          Dodaj
        </button>
      </div>
    </div>
  );
};

export default Ispisnovi;
