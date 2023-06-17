import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import styles from '../../css/FrontPage.module.css'
import ShoppingGif from '../../assets/gifs/shopping.gif'
import RecieptGif from '../../assets/gifs/receipt.gif'
import StopwatchGif from '../../assets/gifs/stopwatch.gif'
import BarcodeGif from '../../assets/gifs/barcode.gif'
import Image_1 from '../../assets/images/Features/Image_1.svg'
import Image_2 from '../../assets/images/Features/Image_2.svg'
import Image_3 from '../../assets/images/Features/Image_3.svg'
import Image_4 from '../../assets/images/Features/Image_4.svg'
import FeaturesBackground_1 from '../../assets/images/Features/FeaturesBackground_1.svg'
import FeaturesBackground_2 from '../../assets/images/Features/FeaturesBackground_2.svg'



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
        <>

            <Box
                sx={{
                    margin: '2% 5%'
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
                    margin: '2.5% 10%',
                    height: '1000px',
                    justifyContent: 'space-evenly'
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

                    {CardContainer(RecieptGif,
                        'Rapid Invoicing',
                        'Streamline your billing process with our rapid invoicing feature and customize payment links to get paid faster')
                    }


                    {CardContainer(BarcodeGif,
                        'Inventory management',
                        'Keep track of the goods and materials that are available for sale.')
                    }

                </Box>

            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: '2.5% 0'

            }}>

                <Typography variant='h3' sx={{
                    padding: '6rem',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    Why to use <span style={{ color: '#0090BD' }}>Audeet?</span>
                </Typography>

                {/* First Container */}

                <div className={styles.featuresContainer}>

                    <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'row-reverse',

                    }}>

                        <img className={styles.featuresImage} src={Image_1} alt='image' />

                    </div>

                    <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '10% 0 0',
                        gap: '20px',
                        margin: '0 15% 0 0'
                    }}>
                        <Typography variant='h4' fontWeight={500}>
                            Create GST and non GST invoices
                        </Typography>

                        <Typography>
                            Audeet simplifies the process of generating GST and non-GST invoices. Create professional and compliant invoices with ease, incorporating accurate tax calculations based on the GST framework. Whether your products or services fall under the GST regime or not, Audeet ensures your invoices are in line with tax regulations.
                        </Typography>
                    </div>

                    <img style={{
                        height: '400px',
                        position: 'absolute',
                        top: '10%',
                        zIndex: -1,
                    }}
                        src={FeaturesBackground_1}

                    />

                </div>

                {/* Second Container */}

                <div className={styles.featuresContainer}>


                    <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '15% 0 0',
                        gap: '20px',
                        margin: '0 0 0 15%'
                    }}>
                        <Typography variant='h4' fontWeight={500}>
                            Estimate /Quotations
                        </Typography>

                        <Typography>
                            Create accurate estimates and quotations effortlessly using Audeet. Impress your potential customers with detailed cost breakdowns and pricing information. Customize and share professional estimates and quotations, enhancing your sales process and improving customer satisfaction.
                        </Typography>
                    </div>


                    <div style={{
                        width: '50%',

                    }}>

                        <img style={{
                            width: '90%',
                            height: '90%'
                        }} src={Image_2} alt='image' />

                    </div>



                    <img style={{
                        height: '400px',
                        position: 'absolute',
                        top: '20%',
                        zIndex: -1,
                    }}
                        src={FeaturesBackground_2}

                    />

                </div>


                {/* Third Container */}

                <div className={styles.featuresContainer}>

                    <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'row-reverse',

                    }}>

                        <img style={{
                            width: '90%',
                            height: '80%'
                        }} src={Image_3} alt='image' />

                    </div>

                    <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '15% 0 0',
                        gap: '20px',
                        margin: '0 15% 0 0'
                    }}>
                        <Typography variant='h4' fontWeight={500}>
                            Estimate /Quotations
                        </Typography>

                        <Typography>
                            Create accurate estimates and quotations effortlessly using Audeet. Impress your potential customers with detailed cost breakdowns and pricing information. Customize and share professional estimates and quotations, enhancing your sales process and improving customer satisfaction.
                        </Typography>
                    </div>

                    <img style={{
                        height: '400px',
                        position: 'absolute',
                        top: '20%',
                        zIndex: -1,
                    }}
                        src={FeaturesBackground_1}

                    />

                </div>

                {/* Fourth Container */}

                <div className={styles.featuresContainer}>


                    <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '15% 0 0',
                        gap: '20px',
                        margin: '0 0 0 15%'
                    }}>
                        <Typography variant='h4' fontWeight={500}>
                            Estimate /Quotations
                        </Typography>

                        <Typography>
                            Create accurate estimates and quotations effortlessly using Audeet. Impress your potential customers with detailed cost breakdowns and pricing information. Customize and share professional estimates and quotations, enhancing your sales process and improving customer satisfaction.
                        </Typography>
                    </div>


                    <div style={{
                        width: '50%',

                    }}>

                        <img style={{
                            width: '90%',
                            height: '100%'
                        }} src={Image_4} alt='image' />

                    </div>



                    <img style={{
                        height: '400px',
                        position: 'absolute',
                        top: '20%',
                        zIndex: -1,
                    }}
                        src={FeaturesBackground_2}

                    />

                </div>

            </Box>


        </>




    )
}

export default Features