import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import profile_pic from '../images/profile_pic.png';
import ProfileNavigationBar from './ProfileNavigationBar';
import Summary from './Summary';
import DunAndBradstreet from './WorkHistory';

function PageContainer() {
  return (
    <>
    <ProfileNavigationBar/>
    <Container fluid style={{ padding: '2px'}}>
      <Row style={{borderStyle: 'groove', backgroundColor:'#FF5733' }}>
        <Col xs lg="1">
          <Image src={profile_pic} rounded width={100} height={125} />
        </Col>
        <Col>
          <Card>
            <Card.Body style={{backgroundColor:'#D8D2D1'}}><b style={{fontSize:'20px'}}>Gaurav Bhardwaj</b><br></br>
            Senior Software Engineer<br></br><br></br>
            <b>Phone:</b> (+91)-9958918242 &nbsp;&nbsp; &nbsp;&nbsp;
            <b>Email:</b>  gkb2004bhardwaj@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;
            <b>D.O.B:&nbsp;&nbsp;</b>20/04/1992&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Location:&nbsp;&nbsp;</b>Gurugram
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Summary/>
      </Row>
      <Row>
        <Card>
            <Card.Header><b style={{fontSize:'18px', color:'#FF5733'}}>Work History</b></Card.Header>
        </Card>
      </Row>
      <Row>
        <DunAndBradstreet/>
      </Row>
    </Container>
    </>
  );
}

export default PageContainer;