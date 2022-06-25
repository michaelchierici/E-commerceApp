import styled from 'styled-components/native';

export const SectionTop = styled.View`
  margin-top: 5px;
  width: 100%;
`;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
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
  width: 250px;
  height: 58%;
  align-items: center;
  margin-bottom: auto;
  border-radius: 10px;
  background-color: #fff;
  padding-right: 50px;
  elevation: 5;
  position: relative;
  margin: 20px;
`;
export const Card = styled.Text`
  max-width: 80%;
  height: 250px;
  margin: 15px;
  border-radius: 10px;
`;

export const SectionDetail = styled.View`
  width: 90%;
  height: 55px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const ProductName = styled.Text`
  font-family: 'roboto';
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-right: auto;
  margin-bottom: 30px;
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
  height: 150px;
  width: 50px;
  position: absolute;
  top: 20%;
  right: 10%;
  justify-content: space-around;
`;

export const ActionButtons = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: #dcdcdc;
height: 50px;
width: 50px
border-radius: 50px;
`;
