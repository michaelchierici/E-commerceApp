import styled from 'styled-components/native';

export const SectionCards = styled.View`
  width: 300px;
  height: 390px;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  border: 1px solid #32e0c4;
  elevation: 5;
  margin: 15px auto;
`;
export const Card = styled.View`
  height: 280px;
  border-radius: 10px;
  margin-bottom: 40px;
  align-items: center;
`;

export const SectionOption = styled.View`
  height: 70px;
  width: 95%;
  position: absolute;
  z-index: 20;
  bottom: -5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  background-color: #393e46;
  overflow: hidden;
`;

export const ProductDetail = styled.ScrollView`
  border-radius: 10px;
  height: 90%;
  width: 85px;
  background-color: #32e0c4;
  overflow: hidden;
`;

export const ActionButtons = styled.TouchableOpacity`
align-items: center;
justify-content: center;
height: 60px;
width: 90px
border-radius: 15px;
background-color: #32E0C4;
position: relative;
margin: 40px;
`;

export const SectionDetail = styled.View`
  flex-direction: row;
  border-radius: 12px;
  justify-content: center;
`;

export const FavoriteButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  margin-left: 30px;
  height: 58px;
`;

export const ProductName = styled.Text`
  font-family: 'System';
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
`;

export const SectionPrice = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  align-self: stretch;
  height: 100%;
`;

export const ProductPrice = styled.Text`
  font-family: 'System';
  font-size: 16px;
  color: #e6e6e6;
  font-weight: bold;
`;
