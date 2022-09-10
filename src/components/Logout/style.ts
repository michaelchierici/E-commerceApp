import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.background_primary};

  height: 40px;
  margin-top: 50px;
  position: absolute;
`;

export const Header = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text_detail};
  font-size: 22px;
  margin-left: 15px;
  position: absolute;
  font-family: ${({theme}) => theme.fonts.semi_bold};
  text-transform: capitalize;
`;
