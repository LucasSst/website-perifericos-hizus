import { 
    Box,
    Container,
    Text
 } from "@chakra-ui/react"
import "../../pages/Home.css"

interface ICardInfo{
    title?:string
    img?: string
    cash?:string
    cashfees: string
    cashtotal: string
}

const CardInfo = ({title, img, cash, cashfees, cashtotal}:ICardInfo) => {
    return (
        <Box
       
        >   
            <Container maxWidth='1100px'>  
                <Box className='boxCardInfo' maxWidth='320px'>
                    <Text className='titleCardInfo'>{title}</Text>
                        <img width='200px' height='100px' src={img} alt="" />
                        <Text className="cashTotalCardInfo">{cashtotal}</Text>
                    
                    <Text className="cashCardInfo"><Text className="greenCash">R${cash} </Text> à vista</Text>
                    <Text className="cashFeesCardInfo">{cashfees}</Text>
                </Box>
            </Container>   
        </Box>
    )
}

export default CardInfo;