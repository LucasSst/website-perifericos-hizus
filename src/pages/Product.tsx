import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Flex, Heading, Img, Radio, RadioGroup, Show, Stack, Text, VStack, useMediaQuery} from '@chakra-ui/react'
import imgProduct from '../image/mouse-gamer.png'
import imgMini1 from '../image/mouse-gamer-redragon-cobra-chroma-rgb-12400dpi-7-botoes-preto-m711-v2_1.jpg'
import imgMini2 from '../image/mouse-gamer-redragon-cobra-chroma-rgb-12400dpi-7-botoes-preto-m711-v2_2.jpg'
import imgMini3 from '../image/mouse-gamer-redragon-cobra-chroma-rgb-12400dpi-7-botoes-preto-m711-v2_3.jpg'
import './Product.css'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { Description } from '../components/Description/Description'
import { api } from '../api'
interface productApi {
    title: string,
    img: string,
    cash: {
        cashVista: string,
        cashCredito: string,
        cashJuros:string
    }
    
}

export const Product = () => {

    const [productApi, setproductApi] = useState<productApi> ()
    useEffect(() => {
        const getProduct = async () => {
            const productAPI:any|productApi = await api
            setproductApi(productAPI)   
        }
        getProduct()
    }, [])



    
    //Radio
    const [value, setValue] = React.useState('1')   

    // Tela responsiva
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

    
    
    
    //Modificar imagem {radio/click}
    function changeImage (imageReceived:any){
        let imgAlternat:any = document.querySelector('#figure')
        imgAlternat?.setAttribute('src', imageReceived)
    }


    //Adicionar zoom na imagem ///
        const imgZoom:any = document.getElementById("imgZoom")
        const figure:any = document.getElementById("figure")
        
        imgZoom?.addEventListener('mousemove', (e:any) => {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;

            figure.style.transformOrigin = `${x}px ${y}px`
            figure.style.transform = 'scale(2)'
        })

        imgZoom?.addEventListener('mouseleave', (e:any) => {
            figure.style.transformOrigin = 'center'
            figure.style.transform = 'scale(1)'
        })
        
    
    
    return (
        <>
        <Container  maxW='1200px' pt='15px'>
            <Breadcrumb mb='5px' color='white' spacing='8px' separator={<ChevronRightIcon color='white' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink><Link to='/'>Home</Link></BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink><Link to='/produtos/mouses'>Mouse</Link></BreadcrumbLink>
                </BreadcrumbItem>

            </Breadcrumb>
            <Box  borderRadius='5px' boxShadow='2xl'  background='#222222'>
                <Flex color='white' direction={isNotSmallerScreen ?  "row" :"column" }>
                    <Show breakpoint='(min-width:1100px)'>
                        <VStack  pr='6px' direction='row-reverse'  >
                            
                            <Img onClick={() => changeImage(imgMini1)}  width='50px' height='50px' src={imgMini1} alt="Mouse Gamer Redragon Cobra Chroma 10000dpi M711"  className="imgMini"/> 
                            <Img onClick={() => changeImage(imgMini2)} width='50px' height='50px' src={imgMini2} alt="Mouse Gamer Redragon Cobra Chroma 10000dpi M711"  className="imgMini"/> 
                            <Img onClick={() => changeImage(imgMini3)} width='50px' height='50px' src={imgMini3} alt="Mouse Gamer Redragon Cobra Chroma 10000dpi M711"  className="imgMini"/> 
                        </VStack>
                    </Show>

                    
                    <VStack>
                        <div id='imgArea'>
                            <figure id='imgZoom'>
                                <Img id='figure' maxW='500px' boxShadow='base' minW='400px' src={imgProduct}/> 
                            </figure>
                        </div>

                        <Show breakpoint='(max-width:1100px)'>
                            <RadioGroup onChange={setValue} value={value}>
                            <Stack direction='row'  pb='12px'>
                                    <Radio onClick={() => changeImage(imgProduct)} checked value='1'></Radio>
                                    <Radio onClick={() => changeImage(imgMini1)} value='2'></Radio>
                                    <Radio onClick={() => changeImage(imgMini2)} value='3'></Radio>
                                    <Radio onClick={() => changeImage(imgMini3)} value='4'></Radio>
                            </Stack>
                            </RadioGroup>
                        </Show>
                    </VStack>

                    <Box m={isNotSmallerScreen ? '0px 5px' : '0px auto'}>
                        <Heading as='h1' size='md'>{`${productApi?.title}`}</Heading>
                            <Box  mt='15px' >
                                <Text  as='s'>De R$220 por: </Text>
                                <Text color='green.600' fontSize='40px'>  R$152,99</Text>
                                <Text fontSize='12px'>  à vista com 15% de desconto no pix ou boleto </Text>
                            </Box>
                            <Box m='15px 0px'>
                                <Text color='red.600'> R$165,58</Text>
                                <Text fontSize='12px'>12x de R$ 18,33 sem juros</Text>
                            </Box>

                        <Button fontSize='26px' height='50px' width='100%'  colorScheme='green' mb='5px'>Comprar</Button>    
                        <Button fontSize='15px' height='25px' width='100%'  colorScheme='twitter' >Adicionar ao carrinho</Button>
                        
                    </Box>

                </Flex>
              
            </Box>   

            <Box  mt='45px' borderRadius='5px' boxShadow='2xl'  background='#222222' color='white'>
                <Heading mb='0.5em' as='h3' size='lg' >DESCRIÇÃO DO PRODUTO</Heading>
                <Flex p='10px' direction = {isNotSmallerScreen ? 'row' : 'column'} >
                
                        <Img minW='300px' maxW='500px' src={imgProduct} />

                        <Flex  maxW='680px' m='auto 0 ' p='25px' textAlign='justify' direction='column'>
                            
                            <Heading mb='0.5em' as='h3' size='lg' >Mouse Gamer Redragon Cobra M711 V2 </Heading>
                            <Heading mb='0.5em' as='h4' size='md'  >Desempenho e design do Redragon Cobra</Heading>
                            <Text>

                                O Mouse Gamer Redragon Cobra, possui sensor PIXART 3327 para Alta Performance (20 G / 100 IPS) e seu sistema é de Iluminação RGB Redragon Chroma Mk.II (7 Diferentes Modos de Iluminação). Possui Polling Rate de 1000hz (Tempo de Resposta Ajustável via Software de 1/2/4/8ms), com 8 Botões Programáveis e 2 Botões laterais para funções / atalhos, macros, etc. Tudo isso com 130 gramas, leve e preciso para aquela jogada especial.

                                <Heading mb='0.5em' as='h4' size='md'  >Compatibilidade do Mouse Gamer Redragon Cobra </Heading>

                                Ele é compatível com Software para Configuração de Macro / Ajuste Iluminação RGB / Configurações de Performance. Tem Memória Interna para Salvamento de Configurações, e Base com Pés de Teflon para Deslize Suave. 5 Perfis de Configurações para Troca Rápida de Configurações de um Game para Outro, com Pegada Ergonômica  confortável perfeita para Destros e cabo Trançado para maior resistência.
                            </Text>                   
                        </Flex>
                    </Flex>
            </Box>

            <Box mt='45px' borderRadius='5px'  p='25px'  boxShadow='2xl'  background='#222222' color='white'>
                <Heading>Informações técnicas</Heading>
                <Flex p='10px' direction = {isNotSmallerScreen ? 'row' : 'column'} >
                        <Img minW='300px' maxW='500px' src={imgProduct} />

                        <Flex  maxW='680px'  m='auto 0 '  textAlign='justify' direction='column'>
                            
                            <Heading mb='0.5em' as='h3' size='lg' >Mouse Gamer Redragon Cobra M711 V2 </Heading>
                            <Heading mb='0.5em' as='h4' size='md'  >Desempenho e design do Redragon Cobra</Heading>
                            <Text>

                            <Heading mb='0.5em' as='h4' size='md'  >Características:</Heading>

                                - Marca: Redragon
                                - Modelo: M711 V2
                                <Heading mb='0.5em' as='h4' size='md'  >Especificações:</Heading>
                                - Sensor PIXART 3327 para Alta Performance (12400DPI/20G/100ips) (óptico)
                                - Iluminação RGB Ajustável: Sistema de Iluminação Chroma RGB! (7 Diferentes Modos de Iluminação)
                                - Polling Rate de 1000hz (Tempo de Resposta Ajustável via Software de 1/2/4/8ms)
                                - 7 Botões Programáveis
                                - Comprimento: 1.8 metros
                                - Cabo de fibra trançada
                                - 2 Botões Laterais para funções / atalhos, macros e etc
                                - Compatível com Software para Configuração de Macro / Ajuste Iluminação RGB / Configurações de Performance
                                - Memória Interna para Salvamento de Configurações
                                - Base com Pés de Teflon para Deslize Suave
                                - 5 Perfis de Configurações para Troca Rápida de Configurações de um Game para Outro
                                - Pegada Ergonômica confortável perfeita para Destros
                                - Cabo Trançado para maior Resistência
                                <Heading mb='0.5em' as='h4' size='md'  >Conteúdo da Embalagem: </Heading>
                                - Mouse Gamer Redragon Cobra Preto RGB M711 V2
                                Garantia:
                                12 meses de garantia
                                Peso:
                                210 gramas (bruto com embalagem)
                            </Text>                   
                        </Flex>
                    </Flex>
            </Box>

        </Container>
        <Description />
        </>
        
    )
}