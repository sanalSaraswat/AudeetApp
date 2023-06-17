import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import FaqGif from '../../assets/gifs/FAQ.gif'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styles from '../../css/FrontPage.module.css'

const Faq = () => {

    const data = [{
        question: '1. What is Audeet and how can it benefit my business?',
        answer: 'Audeet is a comprehensive accounting app designed to streamline your financial management processes. It offers features such as GST and non-GST invoices, payment tracking, purchase and delivery challans, bankbook, cashbook, journal entry, inventory management, and party management. By using Audeet, you can easily track your business transactions, maintain accurate financial records, and gain insights into your business\'s financial health.'
    },

    {
        question: '2. How does Audeet handle GST and non-GST invoices?',
        answer: 'Audeet simplifies the process of generating invoices by providing options for both GST and non-GST invoices. Whether you need to create invoices with GST-compliant details or for non-GST transactions, Audeet offers customizable templates to meet your specific invoicing requirements.'
    },

    {
        question: '3. Can Audeet track payments made and received?',
        answer: 'Absolutely! Audeet allows you to efficiently record both incoming and outgoing payments. You can easily track payments made by your business to vendors or suppliers, as well as payments received from customers. This feature provides a clear overview of your cash flow and helps you maintain accurate financial records.'
    },

    {
        question: '4. Does Audeet offer bankbook and cashbook management?',
        answer: 'Yes, Audeet includes bankbook and cashbook management features. You can easily record and reconcile transactions related to your bank accounts and cash holdings. Audeet allows you to maintain an organized record of your financial activities, ensuring accurate bookkeeping and simplified financial management.'
    },

    {
        question: '5. What is the Journal Entry feature in Audeet?',
        answer: 'Audeet\'s Journal Entry feature allows you to record detailed financial transactions, ensuring comprehensive bookkeeping. You can effortlessly document debit and credit entries, making it easier to maintain accurate financial records, reconcile accounts, and generate financial statements. The Journal Entry feature provides a central hub for all your financial entries.'
    },

    {
        question: '6. Is my data secure with Audeet?',
        answer: 'Audeet takes data security seriously. We implement industry-standard security measures to protect your sensitive financial information. All data transmitted and stored within the app is encrypted, and we follow best practices to ensure your data remains secure and confidential.'
    },

    ]

    const [selected, setSelected] = useState(null)

    function toggle(i) {

        if (i == selected) {
            return setSelected(null)
        }
        setSelected(i)

    }

    return (
        <Box sx={{
            margin: '2.5% 5%'
        }}>

            <Typography variant='h4' fontWeight={500}>
                Frequently Asked <span style={{ color: '#0090BD' }}>Questions</span>
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >

                <Box width={'50%'}>

                    <Box sx={{
                        height: '90%',
                        margin: '5%',
                        justifyContent: 'space-between',
                        display: 'flex',
                        flexDirection: 'column',

                    }}>
                        {data.map((item, i) => (
                            <Box
                                key={i}
                                boxShadow={3}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                    marginBottom: '10px',
                                    padding: '20px',

                                }}>

                                <div
                                    onClick={() => toggle(i)}
                                    style={{

                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Typography>{item.question}</Typography>
                                    {selected == i ? <ExpandLessIcon /> : <ExpandMoreIcon />}

                                </div>

                                <div
                                    className={selected == i ? styles.showContent : styles.content}
                                >
                                    <Typography>{item.answer}</Typography>
                                </div>


                            </Box>
                        ))}
                    </Box>

                </Box>

                <Box width={'50%'}>
                    <img width={'100%'} src={FaqGif} alt='FAQ_Gif' />
                </Box>

            </Box>


        </Box>
    )
}

export default Faq