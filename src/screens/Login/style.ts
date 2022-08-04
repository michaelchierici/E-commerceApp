import React from 'react';

import styled from 'styled-components/native';

export interface Props {
  leftIcon?: React.ReactNode;
}

export const ContentField = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 450px;
  width: 350px;
  border-radius: 15px;
  flex-direction: column;
  background-color: #000814;
`;

export const CredentialInput = styled.TextInput<Props>`
  width: 80%;
  background-color: #4f5d75;
  border-radius: 8px;
  font-size: 16px;
  height: 48px;
  padding-left: 15px;
  font-family: 'System';
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #1d3557;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 60%;
  font-size: 16px;
  height: 50px;
  background-color: #06d6a0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const LoginText = styled.Text`
  font-family: 'System';
  font-size: 16px;
  font-weight: bold;
  color: #06d6a0;
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
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
`;
