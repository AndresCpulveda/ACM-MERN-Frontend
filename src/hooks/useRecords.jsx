import { useContext } from "react";
import RecordsContext from "../context/RecordsProvider";


function useRecords() {
  return (
    useContext(RecordsContext)
  )
}

export default useRecords