import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
    components:{
        MuiAppBar:{
            styleOverrides:{
                root:{
                    backgroundColor: 'white',
                    width: '1440px',
                    height: '64px',
                    boxShadow: "none",
                    borderBottom: '1px solid #C8D5EF',
                    color: 'black',
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    backgroundColor: "white",
                    textTransform: 'none',
                },
            }
        },
        MuiListItemText:{
            styleOverrides:{
                primary:{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#130B43',
                },
                secondary:{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#5C5589',
                }
            }
        },
    }
})

export default theme