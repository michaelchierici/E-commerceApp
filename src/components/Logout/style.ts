import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  background-color: ${({theme}) => theme.colors.background_primary};

  height: 10px;
  margin-top: 50px;
  right: 0;
  position: absolute;
`;

export const Header = styled.TouchableOpacity``;
