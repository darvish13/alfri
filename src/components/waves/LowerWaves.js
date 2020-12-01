import {
  Container,
  Grid,
  InputsRow,
  Col,
  InputWrapper,
  Small,
  Spacer,
  Subtitle,
  LoadingWrapper,
  RemoveField,
  DeleteIcon,
  HR,
} from './waves_styles'
import { Button, CircularProgress, TextField, Fab } from '@material-ui/core'
import { useEffect, useState } from 'react'
import localForage from 'localforage'
import {
  Add,
  BlurLinear,
  BlurLinearOutlined,
  BlurOn,
  BlurOnOutlined,
  DeleteForeverOutlined,
} from '@material-ui/icons'
import { addInput, RenderInputs, RenderParams } from './HandleInputs'
import { Paragraph } from '../colorimetric/colorimetric_styles'

/**
 * Lower waves form
 */
const LowerWaves = () => {
  /**
   * States
   */
  const [Loading, setLoading] = useState(true)
  const [Oxid, setOxid] = useState()
  const [Reduced, setReduced] = useState()
  const [PosCtrls, setPosCtrls] = useState([0, 0, 0])
  const [NegCtrls, setNegCtrls] = useState([0, 0, 0])
  const [Params, setParams] = useState([{ name: '', values: [0, 0, 0] }])

  /**
   * Get initial values from local database
   */
  useEffect(() => {
    getLocalValues()
  }, [])

  /**
   * Get local values
   */
  const getLocalValues = async () => {
    const lower = await localForage.getItem('lower')

    if (lower) {
      const { oxid, reduced, posCtrls, negCtrls, params } = lower

      oxid && setOxid(oxid)
      reduced && setReduced(reduced)
      posCtrls && setPosCtrls(posCtrls)
      negCtrls && setNegCtrls(negCtrls)
      params && setParams(params)
    }

    setLoading(false)
  }

  /**
   * Render
   */
  if (Loading)
    return (
      <LoadingWrapper>
        <CircularProgress />
      </LoadingWrapper>
    )

  return (
    <Container>
      <Subtitle>Lower Wavelengths Data Form:</Subtitle>

      <Spacer />
      <Grid cols={2} gap='1em' align='center'>
        <small style={{ color: '#ff1744' }}>Clear previous data?</small>

        <Button
          variant='outlined'
          size='small'
          color='secondary'
          startIcon={<DeleteForeverOutlined />}
          onClick={() =>
            localForage.setItem('lower', null).then(window.location.reload())
          }
        >
          Reset Form
        </Button>
      </Grid>
      <Spacer />

      <form>
        <HR />
        <Subtitle>Extinction Coefficients</Subtitle>

        <Grid cols={2}>
          <TextField
            value={Oxid}
            onChange={async ({ target: { value } }) => {
              setOxid(value)

              const lower = await localForage.getItem('lower')
              await localForage.setItem('lower', {
                ...lower,
                oxid: value,
              })
            }}
            label='Oxidised (O)'
            defaultValue={Oxid || 0.80586}
            fullWidth
          />

          <TextField
            value={Reduced}
            onChange={async ({ target: { value } }) => {
              setReduced(value)

              const lower = await localForage.getItem('lower')
              await localForage.setItem('lower', {
                ...lower,
                reduced: value,
              })
            }}
            label='Reduced (R)'
            defaultValue={Reduced || 0.155677}
            fullWidth
          />
        </Grid>

        <Spacer height='1.5em' />

        <HR />
        <Subtitle>Controls</Subtitle>
        <Paragraph>
          Use <b style={{ color: '#38afff' }}>+</b> button to add more values
        </Paragraph>

        <Grid cols={2} gap='1.5em'>
          <Col>
            <Subtitle>
              Negative Control
              <br />
              <Small>( alamarBlue + only media )</Small>
            </Subtitle>

            <Col>
              <RenderInputs
                list={NegCtrls}
                setList={setNegCtrls}
                listKeyName='negCtrls'
                localDbKey='lower'
              />
              <Spacer />

              <Fab
                size='small'
                color='primary'
                aria-label='add'
                onClick={() =>
                  addInput({
                    list: NegCtrls,
                    setList: setNegCtrls,
                    listKeyName: 'negCtrls',
                    localDbKey: 'lower',
                  })
                }
              >
                <Add />
              </Fab>
            </Col>
          </Col>

          <Col>
            <Subtitle>
              Positive Control
              <br />
              <Small>( alamarBlue + media + cells )</Small>
            </Subtitle>

            <Col>
              <RenderInputs
                list={PosCtrls}
                setList={setPosCtrls}
                listKeyName='posCtrls'
                localDbKey='lower'
              />

              <Spacer />

              <Fab
                size='small'
                color='primary'
                aria-label='add'
                onClick={() =>
                  addInput({
                    list: PosCtrls,
                    setList: setPosCtrls,
                    listKeyName: 'posCtrls',
                    localDbKey: 'lower',
                  })
                }
              >
                <Add />
              </Fab>
            </Col>
          </Col>
        </Grid>

        <HR />
        <Subtitle>Experimental Parametrs</Subtitle>
        <Paragraph>
          Use <b style={{ color: '#38afff' }}>+ Param</b> button to add more
          parameters
        </Paragraph>

        <RenderParams
          list={Params}
          setList={setParams}
          listKeyName='params'
          localDbKey='lower'
        />
      </form>
    </Container>
  )
}

export default LowerWaves
