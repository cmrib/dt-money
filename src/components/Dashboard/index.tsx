import { Container } from "../Dashboard/styles"
import { Summary } from "../Summary"
import { TransactionsTable } from "../TransactionsTable"
export function Dashboard() {

    // controlar os componentes por aqui

    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}