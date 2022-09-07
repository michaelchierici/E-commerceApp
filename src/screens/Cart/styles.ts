import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #393e46;
  flex: 1;
`;

export const Top = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const Photo = styled.Image``;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'System';
  margin: 0 10px;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  width: 90%;
  margin-top: auto;
  flex: 1;
`;

export const Cards = styled.View`
  background-color: #000;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  width: 300px;
  elevation: 8;
  flex-direction: row;
  margin: 5px 0px;
`;

export const ContentButtons = styled.View`
  height: 30px;
  width: 80px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin: 0px 5px;
  background-color: #fff;
  border-radius: 20px;
`;

export const Ammount = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold 500;
`;

export const Button = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #fff;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 15%;
`;

export const Summary = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin: 5px 0px;
`;

export const SubTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: light 400;
  font-family: 'System';
  margin: 0 10px;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: light 400;
  font-family: 'System';
  margin: 0 10px;
`;

export const CheckoutContent = styled.View`
  width: 95%;
  align-items: flex-end;
  justify-content: center;
`;

export const ButtonCheckout = styled.TouchableOpacity`
  background-color: #000;
  width: 50%;
  height: 50px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const Divisor = styled.View`
  width: 100%;
  height: 1px;
  background-color: #000;
`;

export const TotalValue = styled.Text`
  color: #fff;
  font-weight: bold 500;
  font-size: 18px;
  font-family: 'System';
`;
