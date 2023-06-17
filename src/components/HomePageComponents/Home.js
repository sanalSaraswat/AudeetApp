import React from 'react'
import styles from '../../css/FrontPage.module.css'
import { Box, Button, Typography } from '@mui/material'
import IphoneInHand from '../../assets/images/IphoneInHand.png'
import { alignProperty } from '@mui/material/styles/cssUtils'

const Home = () => {
    return (
        <div className={styles.banner}>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                gap: 4,
                padding: '10% 0 10% 10%'
            }}>

                <Typography
                    variant='h2'
                    sx={{

                        color: '#011135',
                        lineHeight: '3.2rem',
                        fontWeight: 'bolder',
                    }}>
                    Simplify your <br></br> Finances, elevate <br></br> your success
                </Typography>

                <Typography
                    sx={{
                        color: '#011135',

                    }}>
                    Create custom invoices with payment links and track <br></br> sales, purchases, and expenses.
                </Typography>

                <Button
                    sx={{
                        padding: '1rem .75rem',
                        backgroundColor: '#011135',
                        width: '15rem',

                        color: 'white'

                    }}

                >
                    Try now
                </Button>


            </Box>

            <Box width={'50%'}>
                <img className={styles.img} src={IphoneInHand} alt='Image'>

                </img>
            </Box>

        </div>
    )
}

export default Home