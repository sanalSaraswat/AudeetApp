import React from 'react'
import styles from '../css/LoginPage.module.css'
import LoginPageBackground from '../assets/images/LoginPage/LoginPageBackground.png'
import Ellipse from '../assets/images/LoginPage/Ellipse.svg'
import { Button, Input, InputLabel, TextField } from '@mui/material'

const LoginPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <div
                style={{ width: '40%' }}
            >
                <img className={styles.loginBanner} src={LoginPageBackground} alt='backgrounds'></img>
            </div>

            <div
                style={{
                    width: '60%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'

                }}

            >
                <img className={styles.ellipse} src={Ellipse} alt='backgrounds'></img>

                <div
                    style={{
                        width: '80%',
                        margin: ' 0 10%',
                        height: '25%'
                    }}
                >





                    <TextField

                        label='Phone no'
                        sx={{

                            width: '80%',
                            backgroundColor: '#fff',
                        }}
                        placeholder='Ex-9784561235 '
                        type='text'
                    />

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >

                        <button
                            style={{
                                padding: '1rem .75rem',
                                backgroundColor: '#011135',
                                width: '20%',
                                borderRadius: '10px',
                                color: 'white',
                                fontWeight: '500',
                                fontSize: '1rem',

                            }}

                        >
                            Continue
                        </button>

                        <span style={{
                            fontSize: '2rem',
                            color: 'gray',
                            fontFamily: 'Roboto'
                            
                        }}>
                            Or
                        </span>

                    </div>



                </div>

            </div>

        </div>
    )
}

export default LoginPage