import styled from 'styled-components/native';

export const CardList = styled.View`
  background-color: #393e46;
  justify-content: center;
  align-items: flex-start;
  width: 85%;
  height: 90%;
  margin: auto;
  margin-bottom: 25px;
  border-radius: 10px;
  flex-direction: row;
  padding: 15px;
  border: 1px solid #32e0c4;
  elevation: 8;
`;

export const Cards = styled.View`
  background-color: #000;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 94%;
  flex-direction: row;
  margin: 10px;
  elevation: 8;
`;

export const ItemTitle = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  font-family: 'roboto';
  margin-left: 10px;
`;

export const ControlButtons = styled.View`
  height: 60px;
  width: 80px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const ButtonHeart = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #fff;
`;
