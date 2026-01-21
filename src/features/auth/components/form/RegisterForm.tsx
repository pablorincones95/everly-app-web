export const RegisterForm = () => {
  return (
    <>
      <form className="flex flex-col gap-4" action="">
        <div className=" input-custom">
          <label htmlFor="Name"> Full Name</label>
          <input type="text" placeholder="John Doe" name="name" />
        </div>
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
            Register
          </button>
        </div>
      </form>
    </>
  );
};
