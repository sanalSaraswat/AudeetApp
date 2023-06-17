import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import styles from '../css/FrontPage.module.css'
import AboutUsImage from '../assets/images/AboutUsImage.svg'
import ProfitGif from '../assets/gifs/profit.gif'
import Iphone from '../assets/images/Iphone.png'
import Iphone2 from '../assets/images/Iphone2.png'
import Playstore from '../assets/images/PlaystoreImage.png'
import Apple from '../assets/images/AppleImage.png'


const CardContainer = (image, title, content) => {

    return (
        <Card
            sx={{ borderRadius: '40px' }}
            className={styles.aboutUsCard}
            elevation={3}
        >

            <CardMedia
                sx={{
                    height: '128px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img style={{ width: '100px', height: '100px' }} src={image} alt='ShoppingGif' ></img>


            </CardMedia>

            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}
            >

                <Typography padding={'0 5%'} gutterBottom variant="h5" component="div">
                    {title}
                </Typography>

                <Typography padding={'0 5%'} variant="body1" color="text.secondary">
                    {content}
                </Typography>

            </CardContent>

        </Card>
    )

}

const AboutUs = () => {



    return (

        <>

            <div className={styles.aboutUsBanner}>
                {/* <Container
                // sx={{
                //     display: 'flex',
                //     flexDirection: 'row',
                //     padding: '5.5rem',

                // }}
            > */}

                <Box
                    sx={{
                        width: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'

                    }}>

                    <Typography variant='h3'>
                        About <span style={{ color: '#0090BD' }}>Us</span>
                    </Typography>

                    <Box
                        margin={'2.5% 0'}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >



                        <Typography sx={{
                            lineHeight: '2.5rem',
                            fontSize: '1.2rem'
                        }} >
                            Welcome to <span style={{ color: '#0090BD' }}>Audeet</span>, the ultimate accounting app that revolutionizes the way you manage your sales, purchases, expenses, estimates, quotations, and invoices. Our intuitive and powerful platform is designed to simplify your tasks and streamline your financial operations, saving you time, effort, and stress.
                        </Typography>

                        <Typography sx={{
                            lineHeight: '2.5rem',
                            fontSize: '1.2rem'
                        }}>
                            AUDEET is an all-in-one accounting app designed for managing sales, purchases, expenses, estimates, quotations, and generating invoices.
                        </Typography>

                    </Box>



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


                <Box
                    sx={{
                        width: '50%',

                    }}>

                    <img src={AboutUsImage} alt='AboutUsImage'></img>

                </Box>

                {/* </Container> */}


                <div>



                </div>


            </div>


            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Typography variant='h3'
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '120px 0'
                    }}
                >
                    Benefits of using Online <span style={{ color: '#0090BD' }}> Accounting tool</span>
                </Typography>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >

                    <div
                        style={{
                            width: '20%'
                        }}
                    >

                        {CardContainer(ProfitGif,
                            'Cost effective',
                            'Eliminate need for physical storage, postage cost associated with paper based system'
                        )}

                        {CardContainer(ProfitGif,
                            'Cost effective',
                            'Eliminate need for physical storage, postage cost associated with paper based system'
                        )}

                    </div>

                    <div
                        style={{
                            width: '60%',
                            justifyContent: 'center',
                            display: 'flex'
                        }}
                    >

                        <img src={Iphone} alt='Iphone'></img>

                    </div>

                    <div
                        style={{
                            width: '20%'
                        }}
                    >

                        {CardContainer(ProfitGif,
                            'Cost effective',
                            'Eliminate need for physical storage, postage cost associated with paper based system'
                        )}

                        {CardContainer(ProfitGif,
                            'Cost effective',
                            'Eliminate need for physical storage, postage cost associated with paper based system'
                        )}

                    </div>

                </div>
            </div>


            <div className={styles.backgroundImage3}>

                <div style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'cen'
                }}>

                    <img className={styles.iphone2Image} src={Iphone2} alt='Image' />

                </div>


                <div style={{
                    width: '50%'
                }}>
                    <Typography variant='h3'>
                        Introducing <span style={{ color: '#0090BD' }}>Audeet</span>
                    </Typography>

                    <Typography variant='h5'>
                        The Ultimate Accounting App Coming Soon to Google Play and App store!
                    </Typography>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }}>
                        <button className={styles.playstoreButton}>

                        </button>
                    </div>
                </div>
            </div>


        </>

    )
}

export default AboutUs