import styled from "styled-components";

export const Section = styled.section`
  max-width: 70%;
  margin: auto;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  font-size: 0.75rem;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Items = styled.div`
  border-bottom: 1px solid black;
`;

export const Img = styled.img`
  object-fit: contain;
  max-width: 10%;
`;

export const ItemFraction = styled.div`
  /* border: 1px solid black; */
  width: 25%;
`;

export const Sum = styled.div`
  display: flex;
  justify-content: space-between;
`;
