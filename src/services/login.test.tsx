import {login} from "./login"
{/*
const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext:() => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))
*/}

describe('login', () => {


    const mockEmail = 'LucasSst@dio.bank'

    const mockPassword = '1234'
    
    
    it ('Deve exibir um alert com boas vindas', async () => {
        const response = await login (mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    
    it ('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login ('email@invalido.com', 'senha inválida')
        expect(response).toBeFalsy()
   
    })
})