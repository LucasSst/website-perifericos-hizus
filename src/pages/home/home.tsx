import "./home.css"
import { Carousel } from "../../components/Carousel/Carousel"
import { Card } from "../../components/Card/Card"
import {Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import CardInfo from "../../components/Card/CardInfo"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Link } from "react-router-dom"
import tecladoimage from "../../image/teclado-gamer.png"
import mouseimage from "../../image/mouse-gamer.png"
interface UserData  {
    title: string
    img: string
    cash: string
    link: string
    
}

export const Home = () => {
    
    const [userData, setUserData] = useState<UserData> ()
    useEffect(() => {
        const getData = async () => {
            const data:any|UserData = await api
            setUserData(data)   
        }
        getData()
    }, [])

    
    return(
        <>
            <Card>
                <Carousel/>
                <Heading id='titleThree' mt='10px' color='black' as='h3' size='md'> DESTAQUES </Heading>
                <Container maxWidth='1200px'>
                    <SimpleGrid  minChildWidth='240px' columns={4} spacing='3px'>
                        <Link to='/produtos/aa'><Box className="cardInfo"><CardInfo title={`${userData?.title}`} img={`${userData?.img}`} cash={userData?.cash} cashtotal="De R$270 por:" cashfees="12x de R$22,50 sem juros"/></Box></Link>
                        <Box className="cardInfo"><CardInfo title={`${userData?.title}`} img={`${userData?.img}`} cash={userData?.cash} cashtotal="De R$270 por:" cashfees="12x de R$22,50 sem juros"/></Box>
                        <Box className="cardInfo"><CardInfo title={`${userData?.title}`} img={`${userData?.img}`} cash={userData?.cash} cashtotal="De R$270 por:" cashfees="12x de R$22,50 sem juros"/></Box>
                        <Box className="cardInfo"><CardInfo title={`${userData?.title}`} img={`${userData?.img}`} cash={userData?.cash} cashtotal="De R$270 por:" cashfees="12x de R$22,50 sem juros"/></Box>
                        
                        <Box className="cardInfo"><CardInfo title={`Teclado Gamer Mecânico Redragon Shrapnel Rgb US Preto K589`} img={`${tecladoimage}`} cash={'435,90'} cashtotal="De R$550 por:" cashfees={"12x de R$45,83 sem juros"}/></Box>
                        <Box className="cardInfo"><CardInfo title={`Teclado Gamer Mecânico Redragon Shrapnel Rgb US Preto K589`} img={`${tecladoimage}`} cash={'435,90'} cashtotal="De R$550 por:" cashfees={"12x de R$45,83 sem juros"}/></Box>
                        <Box className="cardInfo"><CardInfo title={`Teclado Gamer Mecânico Redragon Shrapnel Rgb US Preto K589`} img={`${tecladoimage}`} cash={'435,90'} cashtotal="De R$550 por:" cashfees={"12x de R$45,83 sem juros"}/></Box>
                        <Box className="cardInfo"><CardInfo title={`Teclado Gamer Mecânico Redragon Shrapnel Rgb US Preto K589`} img={`${tecladoimage}`} cash={'435,90'} cashtotal="De R$550 por:" cashfees={"12x de R$45,83 sem juros"}/></Box>

                        <Box className="cardInfo"><CardInfo title={`Mouse Gamer Redragon Cobra Chroma 10000dpi M711`} img={`${mouseimage}`} cash={'152,99'} cashtotal="De R$220 por:" cashfees={"12x de R$18,33 sem juros"}/></Box>
                        <Box className="cardInfo"><CardInfo title={`Mouse Gamer Redragon Cobra Chroma 10000dpi M711`} img={`${mouseimage}`} cash={'152,99'} cashtotal="De R$220 por:" cashfees={"12x de R$18,33 sem juros"}/></Box>
                        <Box className="cardInfo"><CardInfo title={`Mouse Gamer Redragon Cobra Chroma 10000dpi M711`} img={`${mouseimage}`} cash={'152,99'} cashtotal="De R$220 por:" cashfees={"12x de R$18,33 sem juros"}/></Box>
                        <Box className="cardInfo"><CardInfo title={`Mouse Gamer Redragon Cobra Chroma 10000dpi M711`} img={`${mouseimage}`} cash={'152,99'} cashtotal="De R$220 por:" cashfees={"12x de R$18,33 sem juros"}/></Box>
                    </SimpleGrid>
                </Container>  
            </Card>
        </>
    )
}