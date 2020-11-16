import makeStyles from '@material-ui/core/styles/makeStyles';

export const getStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '16vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogo: {
    height: '128px',
    '&:hover': {
      height: '138px',
    },
  },
  buttonLabel: {
    marginTop: '1rem',
    fontWeight: 500,
  },
});
