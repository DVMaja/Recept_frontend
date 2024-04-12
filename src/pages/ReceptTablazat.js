//import { useTable } from "react-table";

import { useGet } from "../model/Axios";


export default function ReceptTablazat() {
  const tablazatData = useGet(`osszes_recept`);
  console.log(tablazatData);

  return (
    <div>
      <table></table>
    </div>
  );
}
