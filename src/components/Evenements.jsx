export default function Evenements({ evenements }) {
    let totalEvent = 0
    let totalAllEvent = 0 
  return (
    <table className="border-collapse  border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Thème</th>
          <th className="border border-gray-300 px-4 py-2">Date de début</th>
          <th className="border border-gray-300 px-4 py-2">Date de fin</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
          <th className="border border-gray-300 px-4 py-2">Coût journalier</th>
          <th className="border border-gray-300 px-4 py-2">Durée (jours)</th>
          <th className="border border-gray-300 px-4 py-2">Coût Total Evénement</th>
        </tr>
      </thead>
      <tbody>
        {evenements.map((item) => {
          totalEvent = item.cout_journalier*item.duree
          totalAllEvent += totalEvent
          return(
          <tr className="bg-white" key={item.id}>
            <td className="border border-gray-300 px-4 py-2">{item.theme}</td>
            <td className="border border-gray-300 px-4 py-2">{item.date_debut}</td>
            <td className="border border-gray-300 px-4 py-2">{item.date_fin}</td>
            <td className="border border-gray-300 px-4 py-2">{item.description}</td>
            <td className="border border-gray-300 px-4 py-2">{item.cout_journalier}</td>
            <td className="border border-gray-300 px-4 py-2">{item.duree}</td>
            <td className="border border-gray-300 px-4 py-2">{item.cout_journalier*item.duree}</td>
          </tr>
          )
        })}
      </tbody>
      <tfoot>
        <tr className="bg-gray-200">
          <td colSpan="6" className="border border-gray-300 px-4 py-2 text-right">
            Total des coûts des événements assurés est : {totalAllEvent}
          </td>
          <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
      </tfoot>
    </table>
  );
}

