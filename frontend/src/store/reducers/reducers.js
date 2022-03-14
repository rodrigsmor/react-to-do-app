import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            id: 1,
            description: 'Pagar fatura do cartão.',
            done: true
        }, {
            id: 2,
            description: 'Consulta médica na terça depois do almoço',
            done: false
        }, {
            id: 3,
            description: 'Reunião com a equipe às 10:00h.',
            done: false
        }]
    })
})

export default rootReducer;