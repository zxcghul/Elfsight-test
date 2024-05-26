import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { FetchCards } from "./API/GetCards";
import { Cards } from "./components/Cards";
import { Selects } from "./components/Selects";
import { Paginationn } from "./components/Pagination";
const Loader = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }

`;

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  border-radius: 1rem;
  border: 0.2rem solid #3e3e3e;
  font-size: 2rem;
  color: #ffffff;
`;
const Search = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.5rem;
  height: 2rem;
  padding: 0.3rem;
  margin-left: 0.2rem;
  border-radius: 0.7rem;
  border: 0.2rem solid #3e3e3e;
  font-size: 1.2rem;
  color: #ffffff;
`;

function App() {
  const [InfoCards, setInfoCards] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [InputName, setInputName] = useState("");

  const [SelectPage, setSelectPage] = useState(1);
  const [AllPage, setAllPage] = useState();
  const [CardPerPage, setCardPerPage] = useState(20);

  const [SelectAlf, SetSelectAlf] = useState();
  const [SelectAlive, setSelectAlive] = useState("");
  const [SelectGender, SetSelectGender] = useState("");
  const [SelectSpecies, SetSelectSpecies] = useState("");
  const [Reset, setReset] = useState();

  async function FetchInfo() {
    let cardsFull = [];
    setLoading(true);
    const result = await FetchCards(
      "https://rickandmortyapi.com/api/character"
    );
    for (let index = 0; index < result.info.pages; index++) {
      const res = await FetchCards(
        `https://rickandmortyapi.com/api/character?page=${index + 1}`
      );
      cardsFull = [...cardsFull, ...res.results];
    }
    setInfoCards(cardsFull);
    setLoading(false);
  }

  useEffect(() => {
    FetchInfo();
  }, []);

  let filteredData = [...InfoCards];
  const sortedCards = useMemo(() => {
    if (SelectAlf) {
      filteredData.sort((a, b) => {
        const isDigitA = /^\d/.test(a.name);
        const isDigitB = /^\d/.test(b.name);
        if (isDigitA === isDigitB) {
          return a.name.localeCompare(b.name);
        }
        isDigitA ? 1 : -1;
      });
    }
    if (SelectAlive === "Alive") {
      filteredData = filteredData.filter((item) => item.status == "Alive");
    }
    if (SelectAlive === "Dead") {
      filteredData = filteredData.filter((item) => item.status == "Dead");
    }
    if (SelectAlive === "unknown") {
      filteredData = filteredData.filter((item) => item.status == "unknown");
    }
    if (SelectGender === "Male") {
      filteredData = filteredData.filter((item) => item.gender == "Male");
    }
    if (SelectGender === "Female") {
      filteredData = filteredData.filter((item) => item.gender == "Female");
    }
    if (SelectSpecies === "Human") {
      filteredData = filteredData.filter((item) => item.species == "Human");
    }
    if (SelectSpecies === "Humanoid") {
      filteredData = filteredData.filter((item) => item.species == "Humanoid");
    }
    if (SelectSpecies === "Alien") {
      filteredData = filteredData.filter((item) => item.species == "Alien");
    }
    if (SelectSpecies === "Animal") {
      filteredData = filteredData.filter((item) => item.species == "Animal");
    }
    if (SelectSpecies === "Mythological Creature") {
      filteredData = filteredData.filter(
        (item) => item.species == "Mythological Creature"
      );
    }
    if (SelectSpecies === "Poopybutthole") {
      filteredData = filteredData.filter(
        (item) => item.species == "Poopybutthole"
      );
    }
    if (Reset) {
      filteredData = [...InfoCards];
    }

    return filteredData;
  }, [InfoCards, SelectAlf, SelectAlive, SelectGender, SelectSpecies, Reset]);

  const SortedAdnSearchedCards = useMemo(() => {
    setSelectPage(1);
    return sortedCards.filter((item) =>
      item.name.toLowerCase().includes(InputName.toLowerCase())
    );
  }, [InputName, sortedCards]);

  const showPagination = Math.ceil(SortedAdnSearchedCards.length / CardPerPage);
  const lastIndex = SelectPage * CardPerPage;
  const firstIndex = lastIndex - CardPerPage;
  const showPages = SortedAdnSearchedCards.slice(firstIndex, lastIndex);

  return (
    <div>
      <Search
        type="text"
        value={InputName}
        placeholder="Поиск.."
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <Selects
        onChangeAlf={SetSelectAlf}
        onChangeAlive={setSelectAlive}
        onChangeGender={SetSelectGender}
        onChangeSpecies={SetSelectSpecies}
        onChageSearch={setInputName}
        reset={setReset}
      />
      {Loading ? (
        <Loader />
      ) : SortedAdnSearchedCards.length ? (
        <Cards res={showPages} />
      ) : (
        <Empty>Таких персонажей нет</Empty>
      )}
      <Paginationn
        SelectPage={SelectPage}
        setSelectPage={setSelectPage}
        PaginationLength={showPagination}
      />
    </div>
  );
}

export default App;
