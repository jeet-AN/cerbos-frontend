import { store } from "../../store";

const Home = () => {  
  return (
    <div>
      <center>
        <h1 style={{margin: 15}}>Welcome to Home ({store.getState().auth.userInfo?.role})</h1>
      </center>
    </div>
  );
};
export default Home;
