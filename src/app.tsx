import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './components/Main';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function render() {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>,
    document.getElementById('root')
  );
}

render();
