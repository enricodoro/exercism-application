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
    }
})

export default theme