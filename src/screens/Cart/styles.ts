import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background_primary};
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
  margin: 0 auto;
`;

export const Photo = styled.Image``;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.semi_bold};
  color: ${({theme}) => theme.colors.shape};
  font-size: 20px;
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
  background-color: ${({theme}) => theme.colors.background_secondary};
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  width: 100%;
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
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 20px;
`;

export const Ammount = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.semi_bold};
`;

export const Button = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({theme}) => theme.colors.shape};
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

export const TextCopntent = styled.View`
  background-color: red;
  margin: 0 auto;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.semi_bold};
`;

export const Value = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.medium};

  margin-right: 10px;
`;

export const CheckoutContent = styled.View`
  width: 95%;
  align-items: flex-end;
  justify-content: center;
`;

export const ButtonCheckout = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.button.primary};

  width: 50%;
  height: 50px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const Divisor = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const TotalValue = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.semi_bold};
  font-size: 18px;
`;
