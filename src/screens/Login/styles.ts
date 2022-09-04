import React from 'react';

import styled from 'styled-components/native';

export interface Props {
  leftIcon?: React.ReactNode;
  type?: 'newUser' | 'oldUser';
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #000814;
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
  background-color: #000814;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#c0c0c0',
})<Props>`
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
  margin: 10px 0;
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
  background-color: #06d6a0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const Title = styled.Text<Props>`
  font-family: 'System';
  font-size: 16px;
  font-weight: bold;
  color: ${({type}) => (type === 'newUser' ? '#06d6a0' : 'black')};
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
  font-family: 'System';
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
  color: ${({type}) => (type === 'newUser' ? '#06d6a0' : 'black')};
`;
