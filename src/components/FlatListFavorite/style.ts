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
  justify-content: center;
  align-items: flex-start;
  width: 85%;
  height: 80%;
  margin: auto;
  margin-bottom: 70px;
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
  font-size: 20px;
  font-weight: bold;
  font-family: 'System';
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
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;
