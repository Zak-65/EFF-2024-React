import Evenements from "./Evenements";

export default function Expert({ expert }) {
  return (
    <li className="p-6">
      <p className="p-2 font-bold">{expert.nom_complet}</p>
      <Evenements evenements={expert.evenements} />
    </li>
  );
}
