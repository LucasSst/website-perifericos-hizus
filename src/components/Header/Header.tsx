import './Header.css'


import { HamburgerIcon} from "@chakra-ui/icons"
import { Box,
        Container, 
        Flex, 
        IconButton, 
        Input, 
        InputGroup, 
        Menu, 
        MenuButton, 
        MenuItem, 
        MenuList,
        Heading,
        Spacer, 
        } from "@chakra-ui/react"
import { Link } from 'react-router-dom'


export const Header = () => {


    return (
        <Box bg='#0d0d0d'>
            <Container maxW='1100px' >
                <Flex pt='3'>
                    <Box>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                background='#1b4c63'
                                colorScheme='#6ea7c2'
                            />
                            <MenuList>
                                <MenuItem>HeadSet</MenuItem>
                                <MenuItem>Mouse</MenuItem>
                                <MenuItem>Teclado</MenuItem>
                            </MenuList>
                            
                        </Menu>   
                    </Box>
                    <Link to='/'><Box> <Heading color='whiteAlpha.700' as='h1' size='lg'>HIZUS</Heading></Box> </Link>
                                            <Spacer />
                    <Box  p='3'> Logar-se</Box>
                </Flex>
                <InputGroup borderColor='#1b4c63' pb='3'>
                    <Input type='text' size='md' placeholder='Pesquisar o item' />
                </InputGroup>
   
            </Container>
        </Box>
    )
}