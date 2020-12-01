import { Fab } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import styled from 'styled-components'

const MobileWidth = '620px'

export const Container = styled.div`
  padding: 1em 0.25em;
`

export const Spacer = styled.div`
  height: ${({ height }) => height || '1em'};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  grid-gap: ${({ gap }) => (gap ? gap : '2em')};
  align-items: ${({ align }) => align || 'start'};
`

export const Subtitle = styled.h2`
  font-size: 1.15em;
  color: #4f5963;
`

export const Small = styled.small`
  color: gray;
  font-weight: lighter;
  font-size: 0.65em;
`

export const InputsRow = styled.div`
  display: flex;
  overflow-x: auto;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: ${({ margin }) => margin || 0};
`

export const InputWrapper = styled.div`
  margin: 0.5em 0;
  min-width: 13vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: ${MobileWidth}) {
    min-width: 37vw;
  }
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 4em auto;
`

export const RemoveField = styled.div`
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  width: 2em;
  height: 2em;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  box-shadow: 0px 1px 1px -1px rgba(0, 0, 0, 0.2),
    0px 2px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`

export const DeleteIcon = styled(DeleteForever)`
  font-size: 1.25em;
  color: red;
`

export const HR = styled.hr`
  margin: 2em auto 1em auto;
`
