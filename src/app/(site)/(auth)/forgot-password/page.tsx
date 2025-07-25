import ForgotPassword from "@/app/components/auth/forgot-password";
import SEO from "@/components/SEO";

const ForgotPasswordPage = () => {
  return (
    <>
      <SEO
        title="Forgot Password | Syntory Media"
        description="Reset your password securely with Syntory Media."
        url="https://www.syntorymedia.com/forgot-password"
        keywords="password reset, account recovery, Syntory Media"
      />
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
