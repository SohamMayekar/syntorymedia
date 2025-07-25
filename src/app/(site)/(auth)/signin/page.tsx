import Signin from "@/app/components/auth/sign-in";
import SEO from '@/components/SEO';

const SigninPage = () => {
  return (
    <>
      <SEO
        title="Sign In | Syntory Media"
        description="Access your Syntory Media account to explore personalized services and content for creators and small businesses."
        url="https://www.syntorymedia.com/signin"
        keywords="sign in, Syntory Media, creator account, small business services"
      />
      <Signin />
    </>
  );
};

export default SigninPage;
