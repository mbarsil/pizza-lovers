import makeStyles from '@material-ui/core/styles/makeStyles';

export const getStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: '1.125rem',
    'margin-left': '.5rem',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'spaceBetween',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formLogoContainer: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
  },
  formLogo: {
    height: '128px',
  },
  actions: {
    'margin-left': '.5rem',
  },
}));
