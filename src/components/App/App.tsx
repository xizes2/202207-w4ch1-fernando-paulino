import "./App.css";
import Gentlemen from "../Gentlemen/Gentlemen";
import Info from "../Info/Info";

const gentlemen = [
  {
    id: 1,
    name: "Bertin Osborne",
    status: "Alive",
    profession: "Youtuber",
    twitter: "@osbourne",
    picture: "bertin.jpg",
    alternativeText: "Osbourne pointing at you",
    selected: true,
  },
  {
    id: 2,
    name: "The Farytale",
    status: "RIP",
    profession: "Influencer",
    twitter: "pending",
    picture: "fary.jpg",
    alternativeText: "The Fary pointing at you",
    selected: false,
  },
  {
    id: 3,
    name: "Julius Churchs",
    status: "Alive",
    profession: "Java developer",
    twitter: "@julius_churchs",
    picture: "julio.jpg",
    alternativeText: "Churchs pointing at you",
    selected: true,
  },
];

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Info />
      <Gentlemen />
    </div>
  );
};

export default App;
