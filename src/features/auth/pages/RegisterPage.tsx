import { AuthLayout } from "../../../layouts/AuthLayout";
import { Link } from "react-router";
import { RegisterForm } from "../components/form/RegisterForm";

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Register">
        <RegisterForm />

        <div className="flex justify-end mt-4">
          <Link to="/auth/login" className="button-custom">
            Login
          </Link>
        </div>
      </AuthLayout>
    </>
  );
};
