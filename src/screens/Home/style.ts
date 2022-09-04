import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  padding-top: 60px;
`;

export const Content = styled.View`
  width: 300px;
  height: 390px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 15px;
  border: 1px solid #32e0c4;
  elevation: 5;
  margin: 15px 0;
  overflow: hidden;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 70%;
`;

export const Photo = styled.Image.attrs({
  style: {width: 250, height: 250, borderRadius: 10},
})``;

export const Footer = styled.View`
  height: 15%;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.TouchableOpacity``;

export const Title = styled.Text``;

export const Logo = styled.Text``;
