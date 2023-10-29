import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function App() {
  const [fnum, setFnum] = useState("");
  const [snum, setSnum] = useState("");
  const [res, setRes] = useState("");

  const addFun = () => {
    setRes("The value of sum is: " + (parseInt(fnum) + parseInt(snum)));
  };
  const subFun = () => {
    setRes("The value of sub is: " + (parseInt(fnum) - parseInt(snum)));
  };
  const mulFun = () => {
    setRes("The value of mul is: " + parseInt(fnum) * parseInt(snum));
  };
  const divfun = () => {
    setRes("The value of div is: " + parseInt(fnum) / parseInt(snum));
  };

  return (
    <>
      <div   style={{ display:'flex', justifyContent:'center' , alignItems:"center", margin:'20px' , padding:'5px'  }}>
        <InputGroup className="mb-3 me-2">
          <InputGroup.Text id="basic-addon1">First Number</InputGroup.Text>
          <Form.Control
            placeholder="Enter first number"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={fnum}
            onChange={(e) => {
              setFnum(e.target.value);
            }}
          />
        </InputGroup>

        <InputGroup className="mb-3 ">
          <InputGroup.Text id="basic-addon2">Second Number</InputGroup.Text>{" "}
          {/* Changed "basic-addon1" to "basic-addon2" for the second InputGroup */}
          <Form.Control
            placeholder="Enter second number"
            aria-label="Username"
            aria-describedby="basic-addon2"
            value={snum}
            onChange={(e) => {
              setSnum(e.target.value); // Changed setFnum to setSnum for the second input field
            }}
          />
        </InputGroup>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "24px",
        }}
      >
        <Button variant="success" onClick={addFun}>
          ADD
        </Button>
        <Button style={{ margin: "5px" }} variant="primary" onClick={subFun}>
          SUB
        </Button>
        <Button style={{ margin: "5px" }} variant="danger" onClick={mulFun}>
          MUL
        </Button>
        <Button style={{ margin: "5px" }} variant="warning" onClick={divfun}>
          DIV
        </Button>
      </div>

      <h4     style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "24px",
        }}>{res}</h4>
    </>
  );
}

export default App;
