import { useEffect, useState } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'

export function TransactionsTable() {

    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data))
    }, [])

    console.log(transactions)


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className='deposit'>R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className='withdraw'>-R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}