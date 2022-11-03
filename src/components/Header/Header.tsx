import './Header.css'
import {
    Box,
    Button,
    Center,
    Flex,
    Spacer,
    Text
  } from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import { changeLocalStorage } from '../../services/storage';

export const Header = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        changeLocalStorage({
            login:false
        })
        setIsLoggedIn(false)
        navigate('/')
    }

    return (
        <Flex background='#80bac4' p='5px'>
            <Box className='header'>
                <Center color='white'  paddingBottom='3px' fontSize='30px' >
                    <Link to='/'>
                        <Text fontSize='3xl'>
                            Dio Bank
                        </Text>
                    </Link> 
                </Center>
            </Box>
            
            {
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Button onClick={() => logout()}
                        color='#2eccdb'>
                        Sair
                        </Button>
                    </>

                )
            }
            
        </Flex>
    )
}