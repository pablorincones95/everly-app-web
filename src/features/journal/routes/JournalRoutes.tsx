import { Routes, Route, Navigate } from "react-router";
import { JournalPage } from "../pages";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
