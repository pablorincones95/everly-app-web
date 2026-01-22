export const NothingSelectedView = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="card-custom --nothing-selected w-full h-full">
        <div className="flex flex-col items-center justify-center h-full gap-1.5">
          <h1 className="text-2xl font-bold text-center text-color-primary">
            Select or create a new entry
          </h1>
          <p className="text-gray-500 text-center">
            Select an existing entry or create a new one to get started.
          </p>
          <button className="button-custom">New entry</button>
        </div>
      </div>
    </div>
  );
};
