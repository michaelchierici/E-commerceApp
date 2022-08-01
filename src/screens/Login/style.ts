import styled from 'styled-components/native';

export const ContentField = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 450px;
  width: 350px;
  border-radius: 15px;
  flex-direction: column;
  background-color: rgba(2, 500, 900, 0.1);
`;

export const CredentialInput = styled.TextInput`
  width: 80%;
  background-color: rgba(7, 1, 1, 0.1);
  border-radius: 10px;
  font-size: 16px;
  height: 46px;
  padding-left: 15px;
  font-family: 'System';
  font-size: 16px;
  font-weight: bold;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 60%;
  font-size: 16px;
  height: 50px;
  background-color: rgba(2, 500, 900, 0.1);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const LoginText = styled.Text`
  font-family: 'System';
  font-size: 16px;
  font-weight: bold;
  color: #ddd;
`;

export const ArrowButton = styled.TouchableOpacity`
  width: 15%;
  font-size: 16px;
  height: 40px;
  background-color: rgba(2, 500, 900, 0.1);
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;

export const MakeAccount = styled.Text`
  font-family: 'System';
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  text-decoration: underline;
`;
