import {  Routes as Wrapper, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import UserProfile from "../pages/UserProfile";


function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Wrapper>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path='/userprofile' element={<UserProfile />} />
      </Wrapper>
    </BrowserRouter>
  );
}

export default Routes;
