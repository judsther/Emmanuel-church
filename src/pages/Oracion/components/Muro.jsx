import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig";

export default function Muro() {
  const [peticiones, setPeticiones] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "peticiones"), orderBy("time", "desc")); 

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPeticiones(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 items-start justify-center h-auto p-4 m-4">
      
      {peticiones.map((peticion) => (
        <div key={peticion.id} 
        className="shadow-md p-4 rounded w-[300px] h-auto bg-neutral-50">
          <strong className="text-zinc-600" >{peticion.name}</strong> 
          <p>{peticion.requestMsg}</p> 
          <small className="text-zinc-400">
            {peticion.time && peticion.time.seconds
              ? new Date(peticion.time.seconds * 1000).toLocaleString()
              : "Fecha no disponible"}
          </small>
        </div>
      ))}
    </div>
  );
}

