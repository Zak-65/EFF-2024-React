import { useState } from "react";
import Expert from "./Expert";
import { data } from "autoprefixer";

export default function Formulaire() {
  const [message, setMessage] = useState({
    theme: "",
    date_debut: "",
    date_fin: "",
    cout: 0,
    expert: "",
  });
  let durree = new Date(message.date_fin) - new Date(message.date_debut);
  durree = durree / (1000 * 60 * 60 * 24) + 1;
  const [messageFinal, setMessageFinal] = useState("");
  return (
    <>
      <div className="w-6/12 border p-3 mx-52 rounded my-3 bg-gray-200 ">
        <div className="mb-4">
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
            Thème :
          </label>
          <input
            onChange={(e) => setMessage({ ...message, theme: e.target.value })}
            type="text"
            id="theme"
            name="theme"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
            Date de début :
          </label>
          <input
            onChange={(e) => setMessage({ ...message, date_debut: e.target.value })}
            type="date"
            id="start-date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
            Date de fin :
          </label>
          <input
            onChange={(e) => setMessage({ ...message, date_fin: e.target.value })}
            type="date"
            id="end-date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cost" className="block text-sm font-medium text-gray-700">
            Coût :
          </label>
          <input
            onChange={(e) => setMessage({ ...message, cout: e.target.value })}
            type="number"
            id="cost"
            name="cost"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="expert" className="block text-sm font-medium text-gray-700">
            Expert :
          </label>
          <input
            onChange={(e) => setMessage({ ...message, expert: e.target.value })}
            type="text"
            id="expert"
            name="expert"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <button
          onClick={() =>
            setMessageFinal(
              `l'expert ${message.expert} assurera le theme : ${message.theme} avec un cout journaliser : ${
                message.cout
              } pour une duree de ${durree} soit un cour total de : ${message.cout * durree} `
            )
          }
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Confirmer
        </button>
      </div>
      <p>{messageFinal}</p>
    </>
  );
}
