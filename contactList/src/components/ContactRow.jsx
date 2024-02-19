import { useState } from "react";

export default function ContactRow({ setSelectedId, contact }) {
  return (
    <tr
      onClick={() => {
        setSelectedId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
}
