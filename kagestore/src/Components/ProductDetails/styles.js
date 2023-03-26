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
