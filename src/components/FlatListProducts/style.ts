import styled from 'styled-components/native';

export const SectionCards = styled.View`
  width: 300px;
  height: 350px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #dcdcdc;
  elevation: 5;
  position: relative;
  top: 0%;
  z-index: 0;
  margin: 15px auto;
`;
export const Card = styled.Text`
  height: 200px;
  margin: 15px;
  border-radius: 10px;
`;

export const SectionDetail = styled.View`
  width: 80%;
  height: 75px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  z-index: 10;
`;

export const ProductName = styled.Text`
  font-family: 'roboto';
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-right: auto;
`;

export const ProductDetail = styled.View`
  border-radius: 10px;
  height: 35px;
  width: 85px;
  background-color: #dcdcdc;
  margin-left: 200px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const ProductPrice = styled.Text`
  font-family: 'roboto';
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const SectionOption = styled.View`
  height: 100px;
  width: 50px;
  position: absolute;
  z-index: 20;
  right: 10%;
  justify-content: space-around;
`;

export const ActionButtons = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: #dcdcdc;
height: 55px;
width: 55px
border-radius: 50px;
`;
