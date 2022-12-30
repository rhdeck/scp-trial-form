import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Ticket from "./Ticket";
import Thankyou from "./Thankyou";
import Embed from "./Embed";
const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Embed />} />
      <Route path="/ticket/:ticketid" element={<Ticket />} />
      <Route path="/thankyou" element={<Thankyou />} />
      <Route path="*" element={<Navigate to="/ticket/notfound" />} />
    </Routes>
  );
};
export default AppRouter;
