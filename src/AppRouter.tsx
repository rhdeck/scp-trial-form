import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Ticket from "./Ticket";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/ticket/:ticketid" element={<Ticket />} />
      <Route path="*" element={<Navigate to="/ticket/notfound" />} />
    </Routes>
  );
};
export default AppRouter;
