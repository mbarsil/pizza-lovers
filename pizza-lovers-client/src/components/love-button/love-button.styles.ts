import makeStyles from '@material-ui/core/styles/makeStyles';

export const getStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  formLogoContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogo: {
    height: '128px',
  },
  buttonLabel: {
    marginTop: '1rem',
    fontWeight: 500,
  },
});
