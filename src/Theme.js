import { createMuiTheme } from '@material-ui/core/styles'
import { indigo, red } from '@material-ui/core/colors'

const defaultTheme = createMuiTheme()

export default createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red
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
  }
})
