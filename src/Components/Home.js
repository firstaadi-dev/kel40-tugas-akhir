import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

export function Home() {
  return (
    <Container>
      <br />
      <Card className=" bg-light text-Dark ">
        <Card.Img src="https://www.linkpicture.com/q/baby-bg.jpeg" alt="Card image" width={500} height={500} />
        <Card.ImgOverlay>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Card.Title className="title-1 ">
            WE CARE ABOUT YOUR <span className=" text-info">PREGNANCY </span>
          </Card.Title>

          <Card.Text> CHECK YOUR PREGNANCY</Card.Text>
          <Button variant="outline-info" href="Doctors">
            MAKE AN APPOINMENT
          </Button>
        </Card.ImgOverlay>
      </Card>

      <CardGroup className=" text-center">
        <Card>
          <Card.Body className=" body-1">
            <Card.Title>TOP DOCTOR</Card.Title>
            <Card.Text>
              <br />
              There’s never been a doctor who served many patients who, despite their best efforts, did not lose some of them to death. But they understood that was part of life itself.
              <br />
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className=" body-2">
            <Card.Title>PROFESSIONAL STAFF</Card.Title>
            <Card.Text>
              <br />
              Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className=" body-3">
            <Card.Title>24/7 SERVICES</Card.Title>
            <Card.Text>
              <br />
              The future depends on what you do today.
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="text-center">
        <Card>
          <Card.Body className=" body-4">
            <Card.Title>
              <br />
              PREGNANCY MEDICAL
            </Card.Title>
            <Card.Text>
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className=" body-5">
            <Card.Title>
              KELOMPOK 40
              <br />
              Firsta Adi Pradana
              <br />
              Damarjati Rahmandaru
            </Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}
