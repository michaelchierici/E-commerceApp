import styled from 'styled-components/native';

export const CardList = styled.View`
  background-color: #fde;
  justify-content: center;
  align-items: flex-start;
  width: 85%;
  height: 90%;
  margin: auto;
  border-radius: 10px;
  flex-direction: row;
  padding: 15px;
`;

export const Cards = styled.View`
  background-color: #000;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 95%;
  flex-direction: row;
  margin: 10px;
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
export const ButtonAdd = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #fff;
`;

export const ButtonRemove = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #fff;
`;
