import makeStyles from '@material-ui/core/styles/makeStyles';

export const getStyles = makeStyles({
  appContainer: {
    display: 'flex',
    width: '100%',
  },
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 1rem',
  },
  login: {
    width: '50%',
  },
  loveButton: {
    marginTop: '2rem',
  },
  topTenChart: {
    marginTop: '3rem',
    width: '60%',
  },
});
