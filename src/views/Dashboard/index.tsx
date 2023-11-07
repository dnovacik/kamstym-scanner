// libs
import React from 'react'
import { Dimensions } from 'react-native'
import Styled from 'styled-components/native'

const { height, width } = Dimensions.get('window')
const SIDE_WIDTH = width * 0.2

export default () => {
  return (
    <Home.Layout>
      <Home.Wrapper>
        <Home.Left>
          <Home.Title>Dashboard</Home.Title>
        </Home.Left>
        <Home.Right></Home.Right>
      </Home.Wrapper>
    </Home.Layout>
  )
}

const Home = {
  Layout: Styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
  Wrapper: Styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  `,
  Left: Styled.View`
    display: flex;
    width: ${SIDE_WIDTH}px;
    height: 100%;
    align-items: center;
    justify-content: center;
  `,
  Right: Styled.View`
    display: flex;
    background-color: #0e2;
  `,
  Title: Styled.Text`
    display: flex;
    width: 300px;
    font-size: ${(props) => props.theme.font.size.large};
    color: ${(props) => props.theme.colors.dark['shade-1']};
    font-family: ${(props) => props.theme.font.family};
    text-transform: uppercase;
    align-self: center;
    transform: rotate(-90deg);
    padding-left: 45px;
  `,
}
