import Spinner from 'components/Spinner/Spinner';

export function renderWithRequest(error, isLoaded, func) {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Spinner/>;
    } else {
      return func;
    }
}