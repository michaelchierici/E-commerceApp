import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background_primary};
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.colors.shape_light};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;

  width: 85%;
  height: 80%;
  border-radius: 10px;
  elevation: 8;
`;

export const Cards = styled.View`
  background-color: ${({theme}) => theme.colors.shape_dark};
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
  color: ${({theme}) => theme.colors.text};
  font-weight: ${({theme}) => theme.fonts.weight.bold};
  font-size: 20px;
  font-family: 'System';
  margin-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;
