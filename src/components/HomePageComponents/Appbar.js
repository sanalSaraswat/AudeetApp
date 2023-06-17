import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBarImage from '../../assets/images/AppBarImage.svg'
import styles from '../../css/FrontPage.module.css'
import '@fontsource/roboto';

const Appbar = () => {

    const sxObject = {
        typography: {

            fontSize: '1.3rem',
            fontWeight: 400,
            lineHeight: '1.75rem',
            cursor: 'pointer'
        },

        button: {
            backgroundColor: '#011135',
            padding: '10px',
            borderRadius: '10px',
            color: 'white'
        }
    }



    return (

        <AppBar position='static' color='transparent'>

            <Toolbar
                // sx={{margin: '0 2%'}}
                className={styles.toolbar}
            >

                <img src={AppBarImage} alt="Logo" />

                <div className={styles.container}>
                    <Typography

                        sx={sxObject.typography}

                    >Home</Typography>





                    <Typography

                        sx={sxObject.typography}

                    >Features</Typography>

                    <Typography

                        sx={sxObject.typography}

                    >FAQ</Typography>

                    <Typography

                        sx={sxObject.typography}

                    >About Us</Typography>

                    <Typography

                        sx={sxObject.typography}

                    >SignUp</Typography>

                    <Button sx={sxObject.button}>
                        Login
                    </Button>



                </div>



            </Toolbar>



        </AppBar >
    )
}

export default Appbar