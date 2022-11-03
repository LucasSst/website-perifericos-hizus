const conta = {
    email: 'LucasSst@dio.bank',
    password: '1234',
    name: 'Lucas',
    balance: 1500.00,
    id:'2'
}

export const api = new Promise((resolve) => {
    setTimeout (() => {
        resolve(conta)
    }, 3000)
}) 