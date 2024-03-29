import styled from 'styled-components/native';

export interface Props {
  type?: 'newUser' | 'oldUser';
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Logo = styled.Image.attrs({
  source: {
    uri: 'https://o.remove.bg/downloads/37ba4467-14ae-4cd5-b579-ba17f517ebe3/360_F_460996349_bIzl423o41oLdi5hJIgNT3OD8SViuo9i-removebg-preview.png',
  },
})`
  width: 100px;
  height: 100px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  height: 450px;
  width: 350px;
  border-radius: 15px;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.background_primary};
  elevation: 16;
  box-shadow: 15px 15px 15px rgb(255, 101, 0);
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#c0c0c0',
})<Props>`
  width: 80%;
  background-color: ${({theme}) => theme.colors.shape_light};

  border-radius: 8px;
  font-size: 16px;
  height: 48px;
  padding-left: 15px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 16px;
  border: 0.8px solid #29292e;
  margin: 10px 0;
  color: ${({theme}) => theme.colors.text_detail};
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 60%;
  font-size: 16px;
  height: 50px;
  background-color: ${({theme}) => theme.colors.background_secondary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const Title = styled.Text<Props>`
  font-family: ${({theme}) => theme.fonts.semi_bold};
  font-size: 26px;
  color: ${({theme}) => theme.colors.shape};
  text-align: center;
`;

export const Text = styled.Text<Props>`
  font-family: ${({theme}) => theme.fonts.semi_bold};
  font-size: 16px;
  color: ${({type}) => (type === 'newUser' ? '#E5E5E5' : 'black')};
`;

export const ArrowButton = styled.TouchableOpacity`
  width: 15%;
  font-size: 16px;
  height: 40px;
  background-color: rgba(2, 500, 900, 0.1);
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;

export const SubTitle = styled.Text<Props>`
  font-family: ${({theme}) => theme.fonts.light};

  font-size: 18px;
  text-decoration: underline;
  color: ${({type}) => (type === 'newUser' ? '#E5E5E5' : 'black')};
`;
