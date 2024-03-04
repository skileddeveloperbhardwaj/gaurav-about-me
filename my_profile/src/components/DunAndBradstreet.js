import ListGroup from 'react-bootstrap/ListGroup';

function DunAndBradstreet() {
    return (
        <ListGroup as="ul">
            <ListGroup.Item as="li">
                <b style={{ fontSize: '20px', color: 'black' }}>1. &nbsp;Team Lead</b>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" disabled>
                        <b>Team Size:&nbsp;</b> 6 (3 Java + 3 RPA)
                    </ListGroup.Item>
                    <ListGroup.Item as="li"><b>Job: &nbsp;</b> Requirements gathering from Business Team, tasks allocation on JIRA, leading inter-team and US counterparts discussions.</ListGroup.Item>
                    <ListGroup.Item as="li" disabled>
                        <b>RPA Administrator:&nbsp;</b>Adding new UIPath processes and upgrading the existing ones on QA and prod environments.
                    </ListGroup.Item>
                </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item as="li"><b style={{ fontSize: '20px', color: 'black' }}>2. &nbsp;Labour As a Service</b>
                <ListGroup as="ul">
                    <ListGroup.Item as="li"><b>Job: &nbsp;</b> Designed and implemented Enterprise solution to leverage AWS Mturk Crowd Sourcing service for cost minimisation</ListGroup.Item>
                    <ListGroup.Item as="li"><b>Description: &nbsp;</b> Developed Requestor UI and backend service to post and submit results from AWS MTurk</ListGroup.Item>
                    <ListGroup.Item as="li" disabled>
                        <b>Technologies:&nbsp;</b>
                        <ListGroup horizontal>
                            <ListGroup.Item variant='primary'>Java 8</ListGroup.Item>
                            <ListGroup.Item variant='primary'>Java 11</ListGroup.Item>
                            <ListGroup.Item variant='primary'>Spring Framework</ListGroup.Item>
                            <ListGroup.Item variant='primary'> ReactJs</ListGroup.Item>
                            <ListGroup.Item variant='primary'> AWS</ListGroup.Item>
                            <ListGroup.Item variant='primary'> GCP</ListGroup.Item>
                            <ListGroup.Item variant='primary'> MySQL</ListGroup.Item>
                            <ListGroup.Item variant='primary'> DynamoDB</ListGroup.Item>
                            <ListGroup.Item variant='primary'> Opensearch</ListGroup.Item>
                            <ListGroup.Item variant='primary'> Splunk</ListGroup.Item>
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item as="li"><b style={{ fontSize: '20px', color: 'black' }}>3. &nbsp;Data Confirmation Enterprise Solution</b>
                <ListGroup as="ul">
                    <ListGroup.Item as="li"><b>Job: &nbsp;</b> Designed and implemented Enterprise solution to audit and enhance Data quality.</ListGroup.Item>
                    <ListGroup.Item as="li"><b>Description: &nbsp;</b> Architecture includes interaction between D&B's data rest APIs, iResearch and various AWS services like Eventbridge, Lambda Functions, Step Functions etc.</ListGroup.Item>
                    <ListGroup.Item as="li" disabled>
                        <b>Technologies:&nbsp;</b>
                        <ListGroup horizontal>
                            <ListGroup.Item variant='primary'>Java 8</ListGroup.Item>
                            <ListGroup.Item variant='primary'>Java 11</ListGroup.Item>
                            <ListGroup.Item variant='primary'>Spring Framework</ListGroup.Item>
                            <ListGroup.Item variant='primary'> ReactJs</ListGroup.Item>
                            <ListGroup.Item variant='primary'> AWS</ListGroup.Item>
                            <ListGroup.Item variant='primary'> GCP</ListGroup.Item>
                            <ListGroup.Item variant='primary'> MySQL</ListGroup.Item>
                            <ListGroup.Item variant='primary'> DynamoDB</ListGroup.Item>
                            <ListGroup.Item variant='primary'> Opensearch</ListGroup.Item>
                            <ListGroup.Item variant='primary'> Splunk</ListGroup.Item>
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item as="li"><b style={{ fontSize: '20px', color: 'black' }}>4. &nbsp;WorkFlow Automation</b>
                <ListGroup as="ul">
                    <ListGroup.Item as="li"><b>Job: &nbsp;</b> Designed and developed automation of FileBuild, Data Maintenance, Data entry and other workflows</ListGroup.Item>
                    <ListGroup.Item as="li"><b>Description: &nbsp;</b> Architecture includes interaction between D&B's data APIs and other public APIs to fetch and corroborate data.</ListGroup.Item>
                    <ListGroup.Item as="li" disabled>
                        <b>Technologies:&nbsp;</b>
                        <ListGroup horizontal>
                            <ListGroup.Item variant='primary'>Java 8</ListGroup.Item>
                            {/* <ListGroup.Item variant='primary'>Java 11</ListGroup.Item> */}
                            <ListGroup.Item variant='primary'>Spring Framework</ListGroup.Item>
                            <ListGroup.Item variant='primary'> FTL</ListGroup.Item>
                            <ListGroup.Item variant='primary'> AWS</ListGroup.Item>
                            {/* <ListGroup.Item variant='primary'> GCP</ListGroup.Item> */}
                            <ListGroup.Item variant='primary'> MySQL</ListGroup.Item>
                            <ListGroup.Item variant='primary'> DynamoDB</ListGroup.Item>
                            <ListGroup.Item variant='primary'> Opensearch</ListGroup.Item>
                            {/* <ListGroup.Item variant='primary'> Splunk</ListGroup.Item> */}
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default DunAndBradstreet;