import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, TransactionTypeContainer, RadioBox } from './styles';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            id: 1,
            title: title,
            amount: value,
            type: type,
            category: category,
            createdAt: new Date()
        }

        api.post('/transactions', data)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="close modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder='Titulo' value={title} onChange={(event) => { setTitle(event.target.value) }} />


                <TransactionTypeContainer>
                    <RadioBox type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="income" />
                        <span>Entrada</span>

                    </RadioBox>

                    <RadioBox type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="outcome" />
                        <span>Saída</span>

                    </RadioBox>

                </TransactionTypeContainer>
                <input type="number" placeholder='Valor' value={value} onChange={(event) => { setValue(Number(event.target.value)) }} />
                <input placeholder='Categoria' value={category} onChange={(event) => { setCategory(event.target.value) }} />

                <button type="submit">Cadastrar Transação</button>
            </Container>
        </Modal>
    )
}