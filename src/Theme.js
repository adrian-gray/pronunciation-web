import { createMuiTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

const defaultTheme = createMuiTheme()

export default createMuiTheme({
  palette: {
    primary: {
      main: '#b71c1c'
    },
    secondary: orange
  },
  typography: {
    fontSize: 16
  },
  page: {
    ...defaultTheme.mixins.gutters(),
    paddingTop: defaultTheme.spacing.unit * 2,
    paddingBottom: defaultTheme.spacing.unit * 2,
    flexGrow: 1
  },
  subCanvas: {
    marginTop: defaultTheme.spacing.unit * 2,
    marginBottom: defaultTheme.spacing.unit * 2
  },
  largeText: {
    fontSize: '1.25rem'
  },
  headspace: {
    paddingTop: defaultTheme.spacing.unit * 2
  },
  fullWidth: {
    width: '100%'
  },
  hilite: {
    color: '#CC0000'
  },
  cell: {
    paddingLeft: 12,
    paddingRight: 12,
    textAlign: 'center'
  },
  cellHiliteBG: {
    background: '#CCC'
  },
  sentence: {
    padding: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontSize: '1.2rem'
  },
  clearFloat: {
    clear: 'both'
  },
  correct: {
    textAlign: 'center',
    color: '#AAEEAA'
  },
  greenBG: {
    backgroundColor: '#EEFFEE'
  },
  personalSpace: {
    padding: '1rem',
    margin: '1rem'
  },
  center: {
    textAlign: 'center'
  }
})
