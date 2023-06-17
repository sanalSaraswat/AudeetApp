import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import styles from '../../css/FrontPage.module.css'
import AboutUsImage from '../../assets/images/AboutUsImage.svg'
import ProfitGif from '../../assets/gifs/profit.gif'
import UnlockedGif from '../../assets/gifs/unlocked.gif'
import DocumentGif from '../../assets/gifs/document.gif'
import Iphone from '../../assets/images/Iphone.svg'
import Iphone2 from '../../assets/images/Iphone2.png'


const CardContainer = (image, title, content, position) => {

    return (
        <Card
            sx={{ borderRadius: '40px', position: 'absolute', top: position}}
            className={styles.aboutUsCard}
            elevation={3}
            
        >

            <CardMedia
                sx={{
                    height: '100px',
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

                <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                    {title}
                </Typography>

                <Typography textAlign={'center'} padding={'0 5%'} variant="body1" color="text.secondary">
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
                            width: '25%',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >

                        {CardContainer(ProfitGif,
                            'Cost effective',
                            'Eliminate need for physical storage, postage cost associated with paper based system',
                            '5%'
                        )}

                        {CardContainer(UnlockedGif,
                            'Data Security',
                            'Financial data are fully encrypted and safe',
                            '65%'
                        )}

                    </div>

                    <div
                        style={{
                            width: '50%',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >

                        <img src={Iphone} alt='Iphone'></img>
                        

                    </div>

                    <div
                        style={{
                            width: '25%',
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative'

                        }}
                    >

                        {CardContainer(DocumentGif,
                            'Time saving',
                            'Online accounting tools automate various manual and time-consuming tasks.',
                            '48%'
                        )}

                        {CardContainer(DocumentGif,
                            'Accessibility',
                            'Access your finanacial data from anywhere  anytime and perfrom different tasks',
                            ''
                        )}

                    </div>

                </div>
            </div>


            <div className={styles.backgroundImage3}
                
            >

                <div style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>

                    <img className={styles.iphone2Image} src={Iphone2} alt='Image' />

                </div>


                <div style={{
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '5rem'
                }}>
                    <Typography variant='h3'>
                        Introducing <span style={{ color: '#0090BD' }}>Audeet</span>
                    </Typography>

                    <Typography variant='h5'>
                        The Ultimate Accounting App Coming Soon to Google Play and App store!
                    </Typography>

                    
                </div>
            </div>


        </>

    )
}

export default AboutUs