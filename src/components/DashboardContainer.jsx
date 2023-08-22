import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../services/firebase/firebase';
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Dashboard from "./Dashboard";

const DasbhoardContainer = () => {

  const { logged, setLogged } = useContext(UserContext)
  const navigate = useNavigate();

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setLogged(true)
      } else {
        setLogged(false)
        navigate("/login")
      }
    });
  }, [])

  return logged && <Dashboard />
}

export default DasbhoardContainer