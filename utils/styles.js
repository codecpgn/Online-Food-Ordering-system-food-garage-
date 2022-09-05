import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
    
  },
  main: {
    minHeight: '100vh',
  },
  footer: {
    textAlign: 'center',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },

  form:{
   maxWidth:800,
   width: '100%',
   margin:'0 auto',

  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: '1rem' },
  // search
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    
  },
  searchInput: {
    paddingLeft: 5,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
     
    },
  },
  
  hide_show:{

    position:"absolute",
    right:"10%",
  },
  iconButton: {
    backgroundColor: '#f8c040',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
  sort: {
    marginRight: 10,
  },

  
cart :{
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
},

// cartnum:{
//   position: 'absolute',
//   top: '-10px',
//   right: '-10px',
//   height: '20px',
//   width: '20px',
//   backgroundColor: 'rgb(250, 233, 0)',
//   borderRadius:' 50%',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent:' center',
//   color: 'red',
//   fontWeight: '600',
// },


cartbox:{

  display: 'flex',
  alignItems: 'center',
},

  
}));
export default useStyles;