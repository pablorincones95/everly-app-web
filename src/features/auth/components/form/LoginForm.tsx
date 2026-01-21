export const LoginForm = () => {
  return (
    <>
      <form className="flex flex-col gap-4" action="">
        <div className=" input-custom">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="john.doe@example.com" name="email" />
        </div>
        <div className=" input-custom">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="********" name="password" />
        </div>

        <div className="flex gap-2 justify-center flex-wrap">
          <button type="submit" className="button-custom flex-1">
            Login
          </button>
          <button type="button" className="button-custom flex-1">
            Google
          </button>
        </div>
      </form>
    </>
  );
};
