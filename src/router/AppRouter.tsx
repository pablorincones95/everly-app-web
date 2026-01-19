import { BrowserRouter, Routes, Route } from "react-router";
import { AuthRoutes } from "../features/auth/routes/AuthRoutes";
import { JournalRoutes } from "../features/journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<JournalRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
