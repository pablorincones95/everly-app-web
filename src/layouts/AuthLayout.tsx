export const AuthLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="title-custom mb-4">{title}</h1>
      <div className="card-custom"> {children}</div>
    </div>
  );
};
