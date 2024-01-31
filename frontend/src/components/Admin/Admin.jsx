import React, { useState, useEffect } from "react";
import Instance from "../../services/axios";
import { useUser } from "../../Contexts/UserContext";
import { success } from "../../services/toast";

import "../../pages/Compte/Account.scss";

function Admin() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Instance.get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, [loading]);

  const hChangeSelect = (e, id) => {
    const newRoleId = e.target.value;
    Instance.put(`/users/${id}/role`, { id_role: newRoleId })
      .then(() => {
        success("Le rôle de l'utilisateur est bien à jour");
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading((prev) => !prev));
  };

  const hDelete = (id, theme) => {
    if (theme === "users") {
      Instance.delete(`/users/${id}`)
        .then(() => {
          success("L'utilisateur est bien supprimé");
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading((prev) => !prev));
    }
  };

  return (
    <div className="main-content">
      <h1 className="h1-myAccount">Bonjour {user.firstname}</h1>
      <h2 className="h2-myAccount">Utilisateurs</h2>
      <table className="table-myAccount-users">
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Rôle</th>
          <th>Actions</th>
        </tr>
        {users.map((userData) => (
          <tr key={userData.id}>
            <td>{userData.firstname}</td>
            <td>{userData.lastname}</td>
            <td>{userData.email}</td>
            <td className="button-role">
              <select onChange={(e) => hChangeSelect(e, userData.id)}>
                <option value="2" selected={userData.id_role === 2}>
                  Utilisateur
                </option>
                <option value="1" selected={userData.id_role === 1}>
                  Admin
                </option>
              </select>
            </td>
            <td>
              <button
                className="button-myAccount"
                type="button"
                onClick={() => hDelete(userData.id, "users")}
              >
                ❌
              </button>
            </td>
          </tr>
        ))}
      </table>
      <hr />
    </div>
  );
}

export default Admin;
