import { createContext, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { CardContent, CardMedia } from '@mui/material';
import Container from 'react-bootstrap/Container';

const DoctorsDayContext = createContext();
Modal.setAppElement('#root');

function Doctors() {
  const [valueDay, setValueDay] = useState('Senin');
  return (
    <DoctorsDayContext.Provider value={valueDay}>
      <br />
      <div className=" text-center">
        <Button variant="contained" onClick={() => setValueDay('Senin')}>
          Senin
        </Button>
        <Button variant="contained" onClick={() => setValueDay('Selasa')}>
          Selasa
        </Button>
        <Button variant="contained" onClick={() => setValueDay('Rabu')}>
          Rabu
        </Button>
        <Button variant="contained" onClick={() => setValueDay('Kamis')}>
          Kamis
        </Button>
        <Button variant="contained" onClick={() => setValueDay('Jumat')}>
          Jumat
        </Button>
        <Button variant="contained" onClick={() => setValueDay('Sabtu')}>
          Sabtu
        </Button>
        <Button variant="contained" onClick={() => setValueDay('Minggu')}>
          Minggu
        </Button>
      </div>
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

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:3000/${day}`,
      headers: {
        accept: '/',
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
      <Grid container spacing={3} padding="0px 600px 600px 600px">
        {doctors.map((result) => {
          return (
            <Grid item key={result.id} xs={12} className=" ">
              <Card variant="outlined" style={{ width: '18rem' }}>
                <CardActionArea onClick={() => OpenModal(result.id, result.nama, result.spesialis, result.ruang, result.jam)}>
                  <CardMedia component="img" height="200" image={Math.random() * 100 >= 50 ? 'https://i.ibb.co/Dwctwbh/doktor2-removebg-preview.png' : 'https://i.ibb.co/51dVPch/doctor1.png'} alt="doctor" />
                  <CardContent>
                    <Typography variant="h5">Nama: {result.nama}</Typography>
                    <Typography variant="h5">Ruang Praktek:{result.ruang}</Typography>
                    <Typography variant="h5">Jam Praktek:{result.jam}</Typography>
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
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{ width: '50px' }}>
            <Typography variant="h3">Detail Praktik Doktor {currentDetail.Nama}</Typography>
            <br></br>
            <Typography variant="h4">ID: {currentDetail.ID}</Typography>
            <Typography variant="h4">Nama: {currentDetail.Nama}</Typography>
            <Typography variant="h4">Spesialis: {currentDetail.Spesialis}</Typography>
            <Typography variant="h4">Ruang: {currentDetail.Ruang}</Typography>
            <Typography variant="h4">Jam Praktek: {currentDetail.Jam}</Typography>
          </Modal>
        </Container>
      </Grid>
    </div>
  );
}
export default Doctors;
