import { useState } from "react";
import styled from "styled-components";

const Choice = styled.button`
  min-height: 2.5rem;
  min-width: 8rem;
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  background: transparent;
  border-radius: 1rem;
  border: 0.2rem solid #3e3e3e;
  transition: all 0.1s ease;
  &:hover {
    background-color: #393939;
  }
  &:active {
    font-size: 0.9rem;
  }
`;
const Select = styled.select`
  max-height: 2.5rem;
  margin: .5rem;
  padding: .5rem;
  font-size: 1rem;
  background: #242424;
  border-radius: 1rem;
  border: .2rem solid #3e3e3e;
  transition: all .1s ease;
  &:hover {
    border: .2rem solid #FFFFFF;
    background-color: #393939;
`;

const Reset = styled.p`
  width: 4.5rem;
  cursor: pointer;
  color: #656565;
  border-bottom: 0.1rem solid #656565;
  transition: all 0.2s ease;
  &:hover {
    color: #858585;
    border-bottom: 0.1rem solid #858585;
  }
`;
export function Selects({
  onChangeAlf,
  onChangeAlive,
  onChangeGender,
  onChangeSpecies,
  onChageSearch,
  reset,
}) {
  const [toggleForAlf, setToggleForAlf] = useState(false);
  const [toggleForAlive, setToggleForAlive] = useState(false);
  const [toggleForGender, setToggleForGender] = useState(false);
  const [toggleForSpecies, setToggleForSpecies] = useState(false);

  function resetSelects() {
    reset(true);
    onChangeAlf(false);
    onChangeAlive("");
    onChangeGender("");
    onChageSearch("");
    setToggleForGender(false);
    setToggleForAlive(false);
    setToggleForAlf(false);
    setToggleForSpecies(false);
  }

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Select

        onChange={(event) => {
          reset(false);
          setToggleForGender(true);
          onChangeGender(event.target.value);
        }}
        style={{ border: toggleForGender && ".2rem solid #FFFFFF" }}
      >
        <option
          selected={!toggleForGender && "selected"}
          value="selected"
          style={{ display: "none" }}
        >
          Выберите пол
        </option>
        <option value="Male">Мужчина</option>
        <option value="Female">Женщина</option>
      </Select>
      <Select
        onChange={(event) => {
          reset(false);
          setToggleForSpecies(true);
          onChangeSpecies(event.target.value);
        }}
        style={{ border: toggleForSpecies && ".2rem solid #FFFFFF" }}
      >
        <option
          selected={!toggleForSpecies && "selected"}
          style={{ display: "none" }}
        >
          Раса
        </option>
        <option value="Human">Человек</option>
        <option value="Humanoid">Гумоноид</option>
        <option value="Alien">Пришелец</option>
        <option value="Animal">Животное</option>
        <option value="Mythological Creature">Мифологическая сущность</option>
        <option value="Poopybutthole">Дыркавзаднице</option>
      </Select>
      <Select
        onChange={(event) => {
          reset(false);
          setToggleForAlive(true);
          onChangeAlive(event.target.value);
        }}
        style={{ border: toggleForAlive && ".2rem solid #FFFFFF" }}
      >
        <option
          selected={!toggleForAlive && "selected"}
          style={{ display: "none" }}
        >
          Статус
        </option>
        <option value="Alive">Жив</option>
        <option value="Dead">Мертв</option>
        <option value="unknown">Неизвестно</option>
      </Select>
      <Choice
        value={"Alf"}
        onClick={() => {
          reset(false);
          onChangeAlf(!toggleForAlf);
          setToggleForAlf(!toggleForAlf);
        }}
        style={{ border: toggleForAlf && ".2rem solid #FFFFFF" }}
      >
        По алфавиту
      </Choice>
      <Reset
        value={"Reset"}
        onClick={(e) => {
          resetSelects();
        }}
      >
        Сбросить
      </Reset>
    </div>
  );
}
