import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

export const CardBtn = styled.a`
   background-color : #63b8d0;
  font-size        : 1rem;
  letter-spacing   : .2rem;
  border-radius    : .5rem;
  padding          : .5rem 1rem;
  display          : inline-block;
  box-shadow       : 0 10px 20px rgba(0, 0, 0, 0.25);
  transition       : all .2s ease;
  color            : white;

  &:hover {
    box-shadow       : none;
    transform        : scale(.9);
    background-color : #2ed576;
  }   
`;