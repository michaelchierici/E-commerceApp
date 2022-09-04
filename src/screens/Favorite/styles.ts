import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #393e46;
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
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

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'System';
  margin-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;
