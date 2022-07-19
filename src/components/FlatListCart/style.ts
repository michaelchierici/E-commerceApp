import styled from 'styled-components/native';

export const TopSection = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'System';
`;

export const CardList = styled.View`
  background-color: #393e46;
  align-items: flex-start;
  justify-content: center;
  width: 85%;
  height: 70%;
  border-radius: 10px;
  flex-direction: row;
  padding: 15px;
  border: 1px solid #32e0c4;
  elevation: 8;
  position: absolute;
  left: 7.5%;
  top: 10%;
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

export const CardsRemoved = styled.View`
  background-color: #000;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 95%;
  flex-direction: row;
  margin: 10px;
  opacity: 0.2;
`;

export const ItemTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  line-height: 25px;
  font-weight: bold;
  font-family: 'System';
  margin-left: 10px;
`;

export const ControlButtons = styled.View`
  height: 9px;
  width: 80px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;
export const ButtonAdd = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #fff;
`;

export const ButtonRemove = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #fff;
`;

export const CardPrice = styled.View`
  background-color: #000;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 50px;
  flex-direction: row;
  position: absolute;
  bottom: -15%;
`;

export const TotalValue = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  font-family: 'System';
`;
