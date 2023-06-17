import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import styles from '../css/FrontPage.module.css'
import ShoppingGif from '../assets/gifs/shopping.gif'
import DocumentGif from '../assets/gifs/document.gif'
import StopwatchGif from '../assets/gifs/stopwatch.gif'
import BarcodeGif from '../assets/gifs/barcode.gif'

const CardContainer = (image, title, content) => {

    return (
        <Card
            className={styles.card}
            elevation={3}
        >

            <CardMedia
                sx={{
                    height: '228px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img style={{ width: '200px', height: '200px' }} src={image} alt='ShoppingGif' ></img>


            </CardMedia>

            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}
            >

                <Typography padding={'0 5%'} gutterBottom variant="h4" component="div">
                    {title}
                </Typography>

                <Typography padding={'0 5%'} variant="body1" color="text.secondary">
                    {content}
                </Typography>

            </CardContent>

        </Card>
    )

}

const Features = () => {

    return (
        <Container>

            <Box
                sx={{
                    padding: '2% 5%'
                }}
            >

                <Typography variant='h3'>
                    Our <span style={{ color: '#0090BD' }}>Features</span>
                </Typography>

                <Typography>Our features define who we are and set us apart.<br></br>
                    Explore our different features and manage your accounts <br></br> effortlessly
                </Typography>

            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '2.5%',
                    height: '1000px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '50%',

                    }}>

                    {CardContainer(ShoppingGif,
                        'Sales ,Purchase & Expense',
                        'Users can easily enter and store all their sales and purchase data, such as customer information,product details, prices, and quantities')
                    }

                    {CardContainer(StopwatchGif,
                        'Auto Reminder for Payment ',
                        'Automates the process of sending reminders for upcoming or overdue payments via SMS, email, or WhatsApp, making it easier for businesses to collect payments and manage their cash flow.')
                    }




                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '50%',
                        justifyContent: 'space-between',
                        position: 'relative',
                        top: '-10%'


                    }}>

                    {CardContainer(DocumentGif,
                        'Rapid Invoicing',
                        'Streamline your billing process with our rapid invoicing feature and customize payment links to get paid faster')
                    }


                    {CardContainer(BarcodeGif,
                        'Inventory management',
                        'Keep track of the goods and materials that are available for sale.')
                    }

                </Box>

            </Box>
        </Container >

    )
}

export default Features