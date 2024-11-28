import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const AccessDeny = () => {
    const navigate = useNavigate();
    return (
    <div>
        <h1>Access Deny</h1>
        <Button onClick={() => {
            navigate('/')
        }}>Back to Home</Button>
    </div>
  )
};

export default AccessDeny;
