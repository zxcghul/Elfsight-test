import styled from "styled-components";

const PopupContent = styled.div`
  position: relative;
  height: 17rem;
  width: 50rem;
  left: ${(props) => (props.visiblecontent ? "1.15rem" : "-20vw")};
  opacity: ${(props) => (props.visiblecontent ? "1" : "0")};
  border-radius: 0.8rem;
  margin-top: -18.15rem;
  background: #242424;
  transition: all 0.8s ease;
`;
const CardText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 17rem;
  width: 10rem;
  margin: 0 0 0 1rem;
  font-size: 1.1rem;
`;
const Text = styled.p`
  width: 20rem;
  font-weight: italic;
`;

export function Popup({ data, visible }) {
  return (
    <PopupContent visiblecontent={visible}>
      <CardText>
        <Text>
          📃Имя:{" "}
          <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
            {data.name}
          </span>
        </Text>
        <Text>
          🧬Раса: <span style={{ fontWeight: "bolder" }}>{data.species}</span>
        </Text>
        <Text>
          🪦Статус:{" "}
          <span style={{ fontWeight: "bolder" }}>
            {data.status === "Dead" ? "💀" + data.status + "💀" : data.status}
          </span>
        </Text>
        <Text>
          👫Гендер:{" "}
          <span style={{ fontWeight: "bolder" }}>
            {data.gender === "Male" && "♂️" + data.gender + "♂️"}
            {data.gender === "Female" && "♀️" + data.gender + "♀️"}
          </span>
        </Text>
        <Text>
          🎬Кол-во появлений в эпизодах:{" "}
          <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
            {data.episode.length}
          </span>
        </Text>
        <Text>
          🗺️Локация:{" "}
          <span style={{ fontWeight: "bolder" }}>{data.location.name}</span>
        </Text>
        <Text>
          🌏Происхождение:{" "}
          <span style={{ fontWeight: "bolder" }}>{data.origin.name}</span>
        </Text>
      </CardText>
    </PopupContent>
  );
}
