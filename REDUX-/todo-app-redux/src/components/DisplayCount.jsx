import { Card } from 'react-bootstrap'

const DisplayCount = () => {
  return (
    <>
    <Card className='shadow-sm border border-0 mb-3'>
        <Card.Body>
            <h4>Number of todos: 40 </h4>
        </Card.Body>
    </Card>
    </>
  )
}

export default DisplayCount

