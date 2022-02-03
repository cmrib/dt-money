import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Transaction 2',
          amount: 2410,
          type: 'deposit',
          category: 'Bike',
          createdAt: new Date()
        },
        {
          id: 3,
          title: 'Transaction 3',
          amount: 981,
          type: 'deposit',
          category: 'Market',
          createdAt: new Date()
        }
      ]
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return data
    })

  }

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

