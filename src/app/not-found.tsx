import NotFound from "./components/not-found";
import SEO from '@/components/SEO';

const ErrorPage = () => {
  return (
    <>
      <SEO
        title="404 Page | Syntory Media"
        description="The page you are looking for does not exist. Return to Syntory Media's homepage."
        url="https://www.syntorymedia.com/404"
        keywords="404 error, page not found, Syntory Media"
      />
      <NotFound />
    </>
  );
};

export default ErrorPage;
