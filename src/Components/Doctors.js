import { createContext, useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

const DoctorsDayContext = createContext();
Modal.setAppElement("#root");

function Doctors() {
  const [valueDay, setValueDay] = useState("Senin");
  return (
    <DoctorsDayContext.Provider value={valueDay}>
      <div>
        <Button variant="contained" onClick={() => setValueDay("Senin")}>
          Senin
        </Button>
        <Button variant="contained" onClick={() => setValueDay("Selasa")}>
          Selasa
        </Button>
        <Button variant="contained" onClick={() => setValueDay("Rabu")}>
          Rabu
        </Button>
        <Button variant="contained" onClick={() => setValueDay("Kamis")}>
          Kamis
        </Button>
        <Button variant="contained" onClick={() => setValueDay("Jumat")}>
          Jumat
        </Button>
        <Button variant="contained" onClick={() => setValueDay("Sabtu")}>
          Sabtu
        </Button>
        <Button variant="contained" onClick={() => setValueDay("Minggu")}>
          Minggu
        </Button>
      </div>
      <Content />
    </DoctorsDayContext.Provider>
  );
}

function Content() {
  return <div>{<Data />}</div>;
}

function Data() {
  const [doctors, setDoctors] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentDetail, setCurrentDetail] = useState({});
  const day = useContext(DoctorsDayContext);

  function OpenModal(nama) {
    setCurrentDetail({
      nama: nama,
    });

    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3000/${day}`,
      headers: {
        accept: "/",
      },
    })
      .then((data) => {
        console.log(data.data);
        setDoctors([...data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [day]);

  return (
    <div>
      <Grid container spacing={3}>
        {doctors.map((result) => {
          return (
            <Grid item key={result.id} md={4}>
              <Card variant="outlined">
                <CardActionArea
                  onClick={() => OpenModal(result.id, result.nama)}
                >
                  <Typography variant="h5">{result.id}</Typography>
                  <Typography variant="h5">{result.nama}</Typography>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <Typography>{currentDetail.nama}</Typography>
        </Modal>
      </Grid>
    </div>
  );
}
export default Doctors;
