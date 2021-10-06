import { createContext, useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { CardContent, CardMedia } from "@mui/material";
import Container from "react-bootstrap/Container";
import { Box } from "@mui/system";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const DoctorsDayContext = createContext();
Modal.setAppElement("#root");

function Doctors() {
  const [valueDay, setValueDay] = useState("Senin");
  return (
    <DoctorsDayContext.Provider value={valueDay}>
      <br />
      <Box display="flex" justifyContent="center" >
        <Button sx={{ m: 2}} variant="contained" onClick={() => setValueDay("Senin")}>
          Senin
        </Button>
        <Button sx={{ m: 2}} variant="contained" onClick={() => setValueDay("Selasa")}>
          Selasa
        </Button>
        <Button sx={{ m: 2}} variant="contained" onClick={() => setValueDay("Rabu")}>
          Rabu
        </Button>
        <Button sx={{ m: 2}} variant="contained" onClick={() => setValueDay("Kamis")}>
          Kamis
        </Button>
        <Button sx={{ m: 2}} variant="contained" onClick={() => setValueDay("Jumat")}>
          Jumat
        </Button>
        <Button sx={{ m: 2}} variant="contained" onClick={() => setValueDay("Sabtu")}>
          Sabtu
        </Button>
        <Button sx={{ m: 2}} variant="contained" onClick={() => setValueDay("Minggu")}>
          Minggu
        </Button>
      </Box>
      <br />
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

  function pendaftaran() {
    alert(
      `Pendaftaran perjanjian untuk doktor ${currentDetail.Nama} berhasil dibuat`
    );
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
      <Grid container spacing={3} padding="0 10rem">
        {doctors.map((result) => {
          return (
            <Grid item key={result.id} xl={6} xs={12} className=" ">
              <Card variant="outlined" style={{ padding: "0.5 rem" }}>
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

            // <Card style={{ width: '18rem' }} item key={result.id} xs={12}>
            //   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            //   <Card.Body>
            //     <Card.Title>Card Title</Card.Title>
            //     <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            //   </Card.Body>
            //   <ListGroup className="list-group-flush">
            //     <ListGroupItem>Cras justo odio</ListGroupItem>
            //     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            //     <ListGroupItem>Vestibulum at eros</ListGroupItem>
            //   </ListGroup>
            // </Card>
          );
        })}
        <Container>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <Typography align="center" variant="h3">
              Praktik Doktor {currentDetail.Nama}
            </Typography>
            <br></br>
            <Typography align="center" variant="h4">
              ID: {currentDetail.ID}
            </Typography>
            <Typography align="center" variant="h4">
              Nama: {currentDetail.Nama}
            </Typography>
            <Typography align="center" variant="h4">
              Spesialis: {currentDetail.Spesialis}
            </Typography>
            <Typography align="center" variant="h4">
              Ruang: {currentDetail.Ruang}
            </Typography>
            <Typography align="center" variant="h4">
              Jam Praktek: {currentDetail.Jam}
            </Typography>
            <Box textAlign="center">
              <Button variant="contained" onClick={() => pendaftaran()}>
                Buat Perjanjian
              </Button>
            </Box>
          </Modal>
        </Container>
      </Grid>
    </div>
  );
}
export default Doctors;
