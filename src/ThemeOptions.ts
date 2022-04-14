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
                    maxWidth: '1440px',
                    marginInline: 'auto',
                    height: '64px',
                    boxShadow: "none",
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