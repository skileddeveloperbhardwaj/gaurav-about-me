import Card from 'react-bootstrap/Card';

function Summary() {
  return (
    <Card>
      <Card.Header><b>Summary</b></Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{fontSize:'17px'}}>
            {' '}
            A technology enthusiasts, team leader and quick learner. I have a total 9 years of experience in Java Backend technologies and led the team
            for more than 4 years. I have worked on Spring framework, AWS, GCP, ReactJs, MySQL etc. I have good problem solving and communication skills. I am a co-inventor
            of 5 patents as well.{' '}
          </p>
          {/* <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Summary;