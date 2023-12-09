import imageteclado from "../../image/teclado-gamer.png"
import imagemouse from "../../image/mouse-gamer.png"
import imageheadset from "../../image/headset-gamer.png"
import "../../pages/home/home.css"
import { Box, Heading } from "@chakra-ui/react"


const image = [imageteclado, imagemouse, imageheadset]

export const Carousel = () => {
    
    return(
        <>
            <Box id='titleSecondary'>
                <Heading textTransform='uppercase' color='black' as='h2' size='lg'>Produtos</Heading>
            </Box>
            <Box  className='slider'>
                <Box className="slides">                

                            {image.map(image => (
                                <img src={image} alt="produtos"  className="slider-item"/>
                            
                            ))}

                </Box>
            </Box>
        </>
    )
}