"use client";

import { useState } from "react";

// Formulaire sans backend : on empêche l'envoi et on affiche un message de confirmation
export default function FormFront({ children, ...props }) {
  const [envoye, setEnvoye] = useState(false);

  return (
    <form
      {...props}
      onSubmit={(e) => {
        e.preventDefault();
        setEnvoye(true);
      }}
    >
      {children}
      {envoye && (
        <p role="status" style={{ marginTop: 15, color: "#08172E", fontWeight: 500 }}>
          Merci ! Votre message a bien été pris en compte (démonstration, sans serveur).
        </p>
      )}
    </form>
  );
}
