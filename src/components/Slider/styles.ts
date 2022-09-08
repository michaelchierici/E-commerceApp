import styled from 'styled-components/native';

export const Slide = styled.View.attrs({})`
  width: 100%;
  height: 15%;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background_primary};
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
  background-color: ${({theme}) => theme.colors.shape};
  position: relative;
  margin: 0px 10px;
  width: 60%;
`;
