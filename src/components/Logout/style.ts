import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  background-color: ${({theme}) => theme.colors.background_primary};

  height: 40px;
  margin-top: 50px;
  right: -2%;
  position: absolute;
`;

export const Header = styled.TouchableOpacity``;
