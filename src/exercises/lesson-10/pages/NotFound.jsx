import { Link, useLocation } from 'react-router';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section>
      <h2>404: {pathname} Not Found</h2>
      <Link to="/lessons/lesson-10">Home</Link>
    </section>
  );
}
