import styled from 'styled-components/native';

export const Slide = styled.View.attrs({})`
  width: 100%;
  height: 15%;
  flex-direction: row;
  align-items: center;
  background-color: #393e46;
  border-radius: 15px;
`;

export const ButtonTrackScroll = styled.ScrollView.attrs({
  pagingEnabled: true,
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  width: 100%;
  margin: auto;
`;

export const ButtonContent = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 10px;
  background-color: #32e0c4;
  position: relative;
  margin: 0px 10px;
  width: 60%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold 600;
  color: #fff;
`;
