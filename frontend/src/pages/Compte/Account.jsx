import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Contexts/UserContext";

import Admin from "../../components/Admin/Admin";
import User from "../../components/User/User";
import "./Account.scss";

function MyAccount() {
  const { user } = useUser();
  const navigate = useNavigate();
  if (user === null) {
    navigate("/");
  }

  return (
    <div>
      <section className="stars2">
        <img src="./stars.png" alt="stars" />
      </section>
      {user.id_role === 1 ? <Admin /> : <User />}
    </div>
  );
}

export default MyAccount;
