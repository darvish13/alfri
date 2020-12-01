import styled from 'styled-components'

const MobileWidth = '620px'

export const Container = styled.main`
  max-width: 85%;
  margin: auto;

  @media (max-width: ${MobileWidth}) {
    max-width: 100%;
  }
`

export const Card = styled.div`
  margin: 4em 0;
  padding: 1em 2em;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  padding-top: 3.5em;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: ${MobileWidth}) {
    margin: 0;
    padding: 1em;
    padding-top: 3.5em;
    border-radius: 0;
    box-shadow: none;
  }
`

export const Title = styled.h1`
  background-color: #38afff;
  color: white;
  font-size: 1.75em;
  font-weight: bold;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0;
  width: 100%;
  padding: 0.3em 1em;

  @media (max-width: ${MobileWidth}) {
    font-size: 1.25em;
    padding: 0.6em;
  }
`

export const TabBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #aaddff;
  border-radius: 5px;
  overflow: hidden;
  margin: 3em auto 0 auto;
`

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 2.5em;
  color: white;
  font-weight: bold;
  font-size: 1.25em;
  background-color: ${({ selected }) => (selected ? '#38afff' : 'transparent')};
  transition: all ease-in 0.2s;
  /* text-transform: uppercase; */

  @media (max-width: ${MobileWidth}) {
    font-size: 0.95em;
  }
`

export const Paragraph = styled.p`
  color: #4f5963;
  font-size: 1em;
  font-weight: 500;

  @media (max-width: ${MobileWidth}) {
    font-size: 0.9em;
  }
`
