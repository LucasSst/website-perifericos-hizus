import { RButton } from '../components/Button/Button';
import { Card } from "../components/Card";
import {
  Box,
  Center,
  Container,
  Heading, 
  Input
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import {login} from "../services/login"
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import { changeLocalStorage } from '../services/storage';

const Home = () => {
  const [email, setEmail] = useState<string>('') 
  const [password, setPassword] = useState<string> ('')
  const {setIsLoggedIn} = useContext(AppContext) 
  const navigate = useNavigate()
  
  const validateUser = async (email: string, password:string) => {
    const loggedIn = await login(email, password)
    
    
    if(!loggedIn){
      return alert('Email ou senha inválido')
    }

    setIsLoggedIn(true)
    changeLocalStorage({
      login:true
    })
    navigate('/conta/2')
  }

  return (
              <Box color='#2eccdb'> 
                <Card> 
                  <Container maxW='container.sm' padding='25px'>
                      <Box background='#6a9da6' padding='5' borderRadius='5px' boxShadow='1px 1px 5px #195157'>
                          <Center>
                              <Heading textShadow='1px 1px 3px #3f676b' as='h1' fontSize="xl" color='#2eccdb'>
                                  Faça o login
                              </Heading>
                          </Center>
                          <Input boxShadow='1px 1px 2px #3f676b' m='1' placeholder="Email" value= {email} onChange={(event) => setEmail(event.target.value)}/>
                          <Input boxShadow='1px 1px 2px #3f676b' m='1' placeholder="password" value = {password} onChange={(event) => setPassword(event.target.value) }/>
                          <Center>
                              <RButton onClick = {() =>validateUser(email, password)}/>
                          </Center>
                      </Box>
                  </Container>
                </Card>
              </Box>
    )
}

export default Home;