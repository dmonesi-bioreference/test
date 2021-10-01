import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { AppProvider, AppProviderProps } from './AppProvider';
import { Theme } from './Theme';

type ShellProps = AppProviderProps;

const client = new ApolloClient({
  uri: 'https://qa.genedx.com/gdx-webservices/patient?apikey=25f8547e5f9c73ff1bba4b1eb78ed60f',
  cache: new InMemoryCache(),
});

export function Shell(props: Props<ShellProps>) {
  return (
    <AppProvider
      onAuthenticate={props.onAuthenticate}
      onIdentity={props.onIdentity}
    >
      <Theme>
        <ApolloProvider client={client}>{props.children}</ApolloProvider>
      </Theme>
    </AppProvider>
  );
}
