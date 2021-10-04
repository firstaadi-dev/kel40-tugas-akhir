import { createContext, useContext, useEffect, useState } from "react";
import Modal from "react-modal"
import Button from '@mui/material/Button'
const DoctorsDayContext = createContext();
Modal.setAppElement("#root");

function Doctors() {
  const [valueDay, setValueDay] = useState("Senin");
  return(
    <DoctorsDayContext.Provider value={valueDay}>
      <div>
        <Button variant="contained" onClick={() => setValueDay("Senin")}>Senin</Button>
        <Button variant="contained" onClick={() => setValueDay("Senin")}>Selasa</Button>
        <Button variant="contained" onClick={() => setValueDay("Senin")}>Rabu</Button>
        <Button variant="contained" onClick={() => setValueDay("Senin")}>Kamis</Button>
        <Button variant="contained" onClick={() => setValueDay("Senin")}>Jumat</Button>
        <Button variant="contained" onClick={() => setValueDay("Senin")}>Sabtu</Button>
        <Button variant="contained" onClick={() => setValueDay("Senin")}>Minggu</Button>
      </div>
    </DoctorsDayContext.Provider>
  )
}

export default Doctors;