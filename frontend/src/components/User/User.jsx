import React, { useState } from "react";
import { useUser } from "../../Contexts/UserContext";

import "../../pages/Compte/Account.scss";

function User() {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    adresse: "",
    dateAller: "",
    dateRetour: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi de données
    console.info(formData);
  };

  return (
    <div className="main-content">
      <div>
        <h1 className="h1-myAccount">Bonjour {user.firstname}</h1>
      </div>
      <div>
        <h2 className="h2-myAccount">Tableau de bord</h2>
        <h3 className="h2-myAccount">Réservation</h3>
        <form className="form-myAccount" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom"
          />
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Prénom"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Téléphone"
          />
          <input
            type="text"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            placeholder="Adresse postale"
          />
          <input
            type="text"
            name="description"
            value={formData.adresse}
            onChange={handleChange}
            placeholder="Description"
          />
          <input
            type="date"
            name="dateAller"
            value={formData.dateAller}
            onChange={handleChange}
            placeholder="Date d'aller"
          />
          <input
            type="date"
            name="dateRetour"
            value={formData.dateRetour}
            onChange={handleChange}
            placeholder="Date de retour"
          />
          <button className="button-add" type="submit">
            Soumettre
          </button>
        </form>
      </div>
    </div>
  );
}

export default User;
