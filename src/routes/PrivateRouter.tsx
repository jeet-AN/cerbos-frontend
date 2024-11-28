import { Outlet, useNavigate } from "react-router-dom";
import Layout from "src/components/layout/Layout";
import { useAppSelector } from "../store";
import { useEffect } from "react";
import { getProfileAPI } from "../store/api/authApi";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/features/authSlice";
import Cookies from 'js-cookie';
import { RootState } from "src/store/index";

const PrivateRoutes = () => {
  /**
   * you can check if user is logged in or not
   * if you don't have user auth then hit GET request to server with token and get user logged in status
  */ 
  const dispatch = useDispatch();
  const authenticated = useAppSelector((state: RootState) => state.auth.isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    
    async function authOrNot() {
      try {
        // API call for update redux
        let response = await getProfileAPI();
        dispatch(loginSuccess({userInfo: response?.userInfo, userToken: Cookies.get('main') }));
        // navigate("/");
      } catch (err) {
        console.log("err", err);
        navigate("/auth/signin");
      }
    }

    if (!authenticated) {
      authOrNot();
    }
  }, [authenticated]);

  //temp variable => change below variable to see login and sign up page

  return authenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : <></>;
};

export default PrivateRoutes;
