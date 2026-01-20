import { AuthLayout } from "../../../layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <>
      <AuthLayout>
        <div className="card-custom">
          <h1 className="title-custom mb-4">Login</h1>
          <form className="flex flex-col gap-4" action="">
            <div className=" input-custom">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div className=" input-custom">
              <label htmlFor="password">Contraseña</label>
              <input type="password" placeholder="Contraseña" name="password" />
            </div>
            <button type="submit" className="button-custom">
              Login
            </button>
          </form>
        </div>
      </AuthLayout>
    </>
  );
};
