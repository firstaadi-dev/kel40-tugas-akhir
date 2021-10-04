import { createContext, useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { CardContent, CardMedia } from "@mui/material";

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

  function OpenModal(id, nama, spesialis, ruang, jam) {
    setCurrentDetail({
      ID: id,
      Nama: nama,
      Spesialis: spesialis,
      Ruang: ruang,
      Jam: jam,
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
      <Grid container spacing={2}>
        {doctors.map((result) => {
          return (
            <Grid item key={result.id} xs={12}>
              <Card variant="outlined">
                <CardActionArea
                  onClick={() =>
                    OpenModal(
                      result.id,
                      result.nama,
                      result.spesialis,
                      result.ruang,
                      result.jam
                    )
                  }
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={
                      Math.random() * 100 >= 50
                        ? "https://i.ibb.co/Dwctwbh/doktor2-removebg-preview.png"
                        : "https://i.ibb.co/51dVPch/doctor1.png"
                    }
                    alt="doctor"
                  />
                  <CardContent>
                    <Typography variant="h5">Nama: {result.nama}</Typography>
                    <Typography variant="h5">
                      Ruang Praktek:{result.ruang}
                    </Typography>
                    <Typography variant="h5">
                      Jam Praktek:{result.jam}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <Typography variant="h3">
            Detail Praktik Doktor {currentDetail.Nama}
          </Typography>
          <br></br>
          <Typography variant="h4">ID: {currentDetail.ID}</Typography>
          <Typography variant="h4">Nama: {currentDetail.Nama}</Typography>
          <Typography variant="h4">
            Spesialis: {currentDetail.Spesialis}
          </Typography>
          <Typography variant="h4">Ruang: {currentDetail.Ruang}</Typography>
          <Typography variant="h4">Jam Praktek: {currentDetail.Jam}</Typography>
        </Modal>
      </Grid>
    </div>
  );
}
export default Doctors;
