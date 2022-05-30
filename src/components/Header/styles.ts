import styled from "styled-components";


export const Container = styled.header`
  background: #1A1F38;
  display: flex;
  padding: 1em;
`

export const Content = styled.nav`
  max-width: 1120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`

export const Logo = styled.div`
  h1{
    color :yellow;
    text-align: left;
  }
`

export const WrapperInput =  styled.div`
  max-width: 17em;
  width: 100%;
  background: white;


  display: flex;
  align-items: center;
  padding:  0.5em 0.8em;

  border: 0;
  border-radius: 1em;
`