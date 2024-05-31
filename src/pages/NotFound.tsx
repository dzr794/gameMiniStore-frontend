import { Header } from '../components/headers/Header'
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <Header />
      <main className="not-found">
        <h1>404 PAGE NOT FOUND</h1>
        <Link to="/" className="btn default">Back to home page</Link>
      </main>
    </>
  )
}
