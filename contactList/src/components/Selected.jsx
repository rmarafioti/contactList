import { useState } from "react";
import { useEffect } from "react";
import ContactList from "./ContactList";
import ContactRow from "./ContactRow";

export default function Selected({ selectedId, setSelectedId }) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    if (selectedId) {
      fetchContact();
    }
  }, [selectedId]);

  if (!contact) {
    return <div>No Contact at this time</div>;
  }

  const address = `${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`;
  const geo = `Lat: ${contact.address.geo.lat}, Lng: ${contact.address.geo.lng}`;
  return (
    <div>
      <h2>Selected Contact</h2>
      <p>
        <strong>Name:</strong> {contact.name}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
      <p>
        <strong>Website:</strong> {contact.website}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Geo Location:</strong> {geo}
      </p>
      <p>
        <strong>Company:</strong> {contact.company.name}
      </p>
      <p>
        <strong>Catch Phrase:</strong> {contact.company.catchPhrase}
      </p>
      <p>
        <strong>BS:</strong> {contact.company.bs}
      </p>
      <button
        onClick={() => {
          setSelectedId(null);
        }}
      >
        Back To Contact List
      </button>
    </div>
  );
}
