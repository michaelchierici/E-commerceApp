import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({theme}) => theme.colors.background_primary};
  padding-top: 60px;
`;

export const Content = styled.View`
  width: 300px;
  height: 285px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  elevation: 5;
  padding: 20px;
  margin: 15px;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 70%;
  border-radius: 15px;
`;

export const Photo = styled.Image``;

export const Footer = styled.View`
  height: 15%;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.TouchableOpacity``;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-size: 18px;
  font-weight: ${({theme}) => theme.fonts.weight.bold};
  margin: 0 auto;
`;
