import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({theme}) => theme.colors.background_primary};
  padding-top: 100px;
`;

export const Content = styled.View`
  width: 300px;
  height: 275px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 25px;
  margin: 15px;
  box-shadow: 15px 15px 15px rgb(240, 165, 0);
  elevation: 10;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 70%;
  flex-direction: row;
`;

export const Photo = styled.Image`
  position: absolute;
  z-index: 1;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.shape};
  width: 40px;
  height: 95px;
  border-radius: 15px;
  top: -17%;
  left: -5%;
  margin-right: auto;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  elevation: 10;
`;

export const Footer = styled.View`
  height: 15%;
  width: 100%;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.background_primary};
  font-family: ${({theme}) => theme.fonts.semi_bold};
  font-size: 18px;
  margin-right: auto;
  margin-bottom: 5px;
  position: absolute;
  z-index: 20;
  left: 0;
`;

export const Value = styled.Text`
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.semi_bold};
  box-shadow: 15px 15px 15px rgba(5, 0, 0, 1);
  border-radius: 15px;
  width: 100px;
  color: ${({theme}) => theme.colors.title};
  margin-left: auto;
  text-align: center;
  position: absolute;
  z-index: 20;
  right: 0;
  top: -70%;
  elevation: 10;
`;
