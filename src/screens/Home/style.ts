import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;
export const SectionTop = styled.View`
  margin-top: 5px;
  width: 100%;
`;
export const Title = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'roboto';
  margin: 10px;
  border: 1px solid #000;
  text-align: center;
  height: 50px;
  padding: 15px;
  max-width: 100%;
  border-radius: 10px;
  background-color: #000;
`;
export const SectionCards = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;
export const Card = styled.Text`
  width: 250px;
  height: 250px;
  margin: 15px;
  border-radius: 4px;
  background-color: #d5d5d5;
`;
