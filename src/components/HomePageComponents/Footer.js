import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import AudeetLogo from '../../assets/images/AudeetLogo.svg'
import styles from '../../css/FrontPage.module.css'
import AppBarImage from '../../assets/images/AppBarImage.svg'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#ECF5FF' }}>

            <Container
                sx={{
                    padding: '60px 0 0',
                    height: '400px'
                }}

            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >

                    <TextField
                        sx={{

                            width: '78%',
                            backgroundColor: '#fff',
                        }}
                        height='72px'
                        placeholder='Enter your email address to subscribe '
                        type='text'
                    />
                    <button
                        style={{

                            padding: '1rem .75rem',
                            backgroundColor: '#011135',
                            width: '20%',

                            color: 'white'

                        }}

                    >
                        Try now
                    </button>
                </Box>


                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '300px'
                }}>

                    <Box width={'50%'} sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '40px 0 '
                    }} >

                        <Box width={'60%'}>

                            <img src={AppBarImage} alt="Logo" />

                            <Typography>
                                Audeet is an accounting website that simplifies  your financial related problems
                            </Typography>
                        </Box>

                        <Box width={'40%'}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '5% 6%',
                                justifyContent: 'space-between',
                                
                            }}
                        >
                            <Typography>Features</Typography>
                            <Typography>About Us</Typography>
                            <Typography>FAQ</Typography>
                            <Typography>Terms and Conditions</Typography>
                            <Typography>Privacy Policy</Typography>
                        </Box>

                    </Box>

                    <Box width={'50%'}>
                        <img className={styles.audeetLogo} src={AudeetLogo} alt='AudeetLogo' />
                    </Box>

                </Box>
            </Container>

        </div>
    )
}

export default Footer