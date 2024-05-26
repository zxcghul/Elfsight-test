import { Card } from "./Card";
import styled from "styled-components";
const CardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  opacity: 0; 
  animation: fadeIn .5s forwards;
    @keyframes fadeIn {
    to {
    opacity: 1;   
}
`;

export function Cards({ res }) {
  return (
    <CardStyle>
      {res.map((item) => {
        return <Card data={item} key={item.id} />;
      })}
    </CardStyle>
  );
}
