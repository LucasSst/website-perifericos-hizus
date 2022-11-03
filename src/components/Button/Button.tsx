import {
    Button
  } from '@chakra-ui/react';
import { MouseEventHandler } from "react";

interface IDButton {
    onClick: MouseEventHandler
}

export const RButton = ({onClick}: IDButton) =>{
    return (
        <Button onClick={onClick}>            
                <h1>Entrar</h1>  
        </Button>
    )
} 