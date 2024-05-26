import styled from "styled-components";

const ButtonsPages = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 0 0;
  gap: 1rem;
  font-size: 1.5rem;
`;
const InputPages = styled.input`
  width: 2.5rem;
  border: none;
  border-radius: 0.3rem;
  margin: 0.2rem;
  font-size: 1.5rem;
  color: #8e8e8e;
`;
const Button = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1.2rem;
  background: #242424;
  border: .2rem solid #3e3e3e;
  border-radius: .3rem;
  &:hover {
    border: .2rem solid #FFFFFF;
    background-color: #393939;
    &:active {
        font-size: 1.3rem;
    }
`;

export function Paginationn({ SelectPage, setSelectPage, PaginationLength }) {
  return (
    <ButtonsPages>
      <Button
        onClick={() => {
          setSelectPage(SelectPage - 1);
          if (SelectPage <= 1) {
            setSelectPage(42);
          }
        }}
      >
        ←
      </Button>
      <span>{SelectPage}</span>
      <Button
        onClick={() => {
          setSelectPage(SelectPage + 1);
          if (SelectPage >= 42) {
            setSelectPage(1);
          }
        }}
      >
        →
      </Button>
      <div>
        <InputPages
          type="number"
          placeholder={SelectPage}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (e.target.value > PaginationLength) {
                e.target.value = PaginationLength;
              }
              if (e.target.value < 1) {
                e.target.value = 1;
              }
              setSelectPage(+e.target.value);
              e.target.value = "";
            }
          }}
        />
        <span style={{ color: "#5e5e5e" }}>/{PaginationLength}</span>
      </div>
    </ButtonsPages>
  );
}
