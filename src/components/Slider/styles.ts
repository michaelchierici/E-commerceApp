import styled from 'styled-components/native';

export const Slide = styled.View.attrs({})`
  width: 100%;
  height: 15%;
  justify-content: center;
`;

export const ButtonTrackScroll = styled.ScrollView.attrs({
  pagingEnabled: true,
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  width: 100%;
`;

export const ButtonContent = styled.TouchableOpacity`
 align-items: center;
justify-content: center;
height: 60px;
width: 90px
border-radius: 15px;
background-color: #32E0C4;
position: relative;
margin: 0px 20px;
width: 100%;

`;
