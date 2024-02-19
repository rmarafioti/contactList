import { useState } from "react";
import ContactList from "./ContactList";
import Selected from "./Selected";

export function App() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      {selectedId ? (
        <Selected selectedId={selectedId} setSelectedId={setSelectedId} />
      ) : (
        <ContactList setSelectedId={setSelectedId} />
      )}
    </>
  );
}

export default App;
