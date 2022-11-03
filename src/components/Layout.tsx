import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({children}:any) => {
    return (
        <>
            <Box bg='#bfc8c9' minHeight='100vh' >
                <Header/>
                {children}
            </Box>
                <Footer/> 
            
        </>
    )
}