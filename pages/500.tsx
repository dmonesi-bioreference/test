import { ErrorPage } from 'screens';

export default function InternalServerError() {
  return <ErrorPage statusCode={500} />;
}
