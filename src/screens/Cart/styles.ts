import styled from 'styled-components/native';

interface Props {
  type: 'minus' | 'delete';
}

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-evenly
  background-color: #393e46;
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'System';
  margin-left: 10px;
`;

export const Content = styled.View`
  background-color: #393e46;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;

  width: 85%;
  height: 80%;
  border-radius: 10px;
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

export const Button = styled.TouchableOpacity<Props>`
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

export const Footer = styled.View`
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: #000;
  border-radius: 10px;
  height: 30px;
`;

export const TotalValue = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  font-family: 'System';
`;
