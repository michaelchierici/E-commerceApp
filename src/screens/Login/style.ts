import styled from 'styled-components/native';

export const ContentField = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 450px;
  width: 350px;
  border-radius: 22px;
  border: 2px solid #32e0c4;
  flex-direction: column;
`;

export const UserNameInput = styled.TextInput`
  width: 80%;
  background-color: #fff;
  border-radius: 20px;
  font-size: 16px;
  height: 46px;
  padding-left: 15px;
  font-family: 'System';
  font-size: 16px;
  font-weight: bold;
`;

export const PasswordInput = styled.TextInput`
  width: 80%;
  font-size: 16px;
  height: 46px;
  background-color: #fff;
  border-radius: 20px;
  padding-left: 15px;
  font-family: 'System';
  font-size: 16px;
  font-weight: bold;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 60%;
  font-size: 16px;
  height: 50px;
  background-color: #1e1e;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const LoginText = styled.Text`
  font-family: 'System';
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;
