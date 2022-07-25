import { useState } from "react";
import gentlemen from "../../types/interfaces";

interface GentlemenProps {
  gentlemen: gentlemen;
}

const Gentlemen = ({ gentlemen }: GentlemenProps): JSX.Element => {
  const [selected, setSelected] = useState(false);

  const toggleStatus = () => {
    setSelected(!selected);
  };

  return (
    <main className="main">
      <ul className="gentlemen">
        <li className="gentleman" onClick={toggleStatus}>
          <div className="gentleman__avatar-container">
            <img
              className="gentleman__avatar"
              src={`img/${gentlemen.picture}`}
              alt={gentlemen.alternativeText}
            />
            <span className="gentleman__initial">
              {gentlemen.name.includes("The")
                ? gentlemen.name.split(" ")[1][0]
                : gentlemen.name[0]}
            </span>
          </div>
          <div className="gentleman__data-container">
            <h2 className="gentleman__name"> {gentlemen.name} </h2>
            <ul className="gentleman__data-list">
              <li className="gentleman__data">
                <span className="gentleman__data-label">Profession:</span>
                {gentlemen.profession}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Status:</span>{" "}
                {gentlemen.status}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Twitter:</span>{" "}
                {gentlemen.twitter}
              </li>
            </ul>
          </div>
          <i
            className="icon gentleman__icon fas fa-check"
            style={{ display: selected ? "flex" : "none" }}
          ></i>
          <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </li>
      </ul>
    </main>
  );
};

export default Gentlemen;
