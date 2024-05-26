import { useState } from "react";
import styled from "styled-components";
import { Popup } from "./Popup";
const CardStyle = styled.div`
  display: flex;
  justify-content: start;
  height: 17rem;
  max-width: 30wv;
  border-radius: 1rem;
  border: 0.2rem solid #3e3e3e;
  background-color: #242424;
  color: #ffffff;
  margin: 1rem;
  transition: all 0.2s ease;
  z-index: 1;
`;
const Image = styled.img`
  height: 17rem;
  border-radius: 1rem;
`;
const CardText = styled.div`
  height: 10rem;
  width: 18rem;
  margin: 0 0 0 1rem;
  font-size: 1.1rem;
`;
const Text = styled.p`
  font-weight: italic;
`;
const More = styled.p`
  display: flex;
  align-self: flex-end;
  height: 1.7rem;
  margin: 1rem 1rem 1rem 8rem;
  cursor: pointer;
  color: #656565;
  border-bottom: 0.1rem solid #656565;
  transition: all 0.2s ease;
  z-index: 1000;
  &:hover {
    color: #858585;
    border-bottom: 0.1rem solid #858585;
  }
`;

export function Card({ data }) {
  const [PopupOpen, setPopupOpen] = useState(false);
  return (
    <div>
      <CardStyle
        onClick={(e) => {
          if (e.target.classList.contains("OpenPopup")) {
            setPopupOpen(!PopupOpen);
          }
        }}
        more={More}
      >
        <Image src={data.image} alt="avatar" />
        <CardText>
          <Text>
            Имя:{" "}
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              {data.name}
            </span>
          </Text>
          <Text>
            Раса: <span style={{ fontWeight: "bolder" }}>{data.species}</span>
          </Text>
          <Text>
            Статус:{" "}
            <span style={{ fontWeight: "bolder" }}>
              {data.status === "Dead" ? "💀" + data.status + "💀" : data.status}
            </span>
          </Text>
          <Text>
            Гендер: <span style={{ fontWeight: "bolder" }}>{data.gender}</span>
          </Text>
        </CardText>
        <More className="OpenPopup">Подробнее</More>
      </CardStyle>
      <Popup data={data} visible={PopupOpen} />
    </div>
  );
}
