import styled from "styled-components";

export const RatingContainer = styled.div`
  max-width: 100%;
  font-size: 0.8rem;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const ImgContainer = styled.div`
  margin: auto;
  max-width: 70%;
`;

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 20px 0;
  gap: 15px;
`;

export const ReviewContainer = styled.div`
  border: 1px solid black;
  padding: 15px;
  margin-bottom: 20px;
`;

export const ReviewOverhead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
