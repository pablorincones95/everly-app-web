import { AuthLayout } from "../../../layouts/AuthLayout";
import { LoginForm } from "../components/form/LoginForm";
import { Link } from "react-router";

export const LoginPage = () => {
  return (
    <>
      <AuthLayout title="Login">
        <LoginForm />
        <div className="flex justify-end mt-4">
          <Link to="/auth/register" className="button-custom">
            Crear Cuenta
          </Link>
        </div>
      </AuthLayout>
    </>
  );
};
