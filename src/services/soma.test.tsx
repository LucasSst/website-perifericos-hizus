import { soma, multiplica} from "./soma";

describe('soma',()=> {
    it ('Deve somar 1 ao número informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })
    
    it ('Deve multiplicar o numero por 2', () =>{
        const value = multiplica(2, 2)
        expect(value).toBe(4)
    })

    it('Deve dividir o número por 3', () => {
        const value = multiplica(2, 3)
        expect(value).toBe(6)
    })

    it ('Caso o valor seja maior que 4 deve dar erro', () => {
        const value = multiplica (2,4)
        expect(value).toBe('Erro Multiplicador não aceito')
    })

})