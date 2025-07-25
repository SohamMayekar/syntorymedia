import SignUp from "@/app/components/auth/sign-up";
import SEO from '@/components/SEO';

const SignupPage = () => {
  return (
    <>
      <SEO
        title="Sign Up | Syntory Media"
        description="Join Syntory Media today and unlock exclusive content and services tailored for creators and small businesses."
        url="https://www.syntorymedia.com/signup"
        keywords="sign up, Syntory Media, creator services, small business growth"
      />
      <SignUp />
    </>
  );
};

export default SignupPage;
