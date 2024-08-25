import React, { useState } from 'react';
import showPwdImg from '../component/icons/show-password.svg';
import hidePwdImg from '../component/icons/hide-password.svg';
import { Col, Row, Container, Table, Image} from "react-bootstrap";
import './passwordform.css'
import {Input} from 'reactstrap'


const PasswordShowHide = ({name, handleChange}) => {

  // const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className="showhide">
        <Row>
    <Col md={10}>
        <Input
          name={name}
          placeholder="Enter Password"
          type={isRevealPwd ? "text" : "password"}
          // value={pwd}
          onChange={handleChange}
          className="formlogin1"
        />
        </Col>
        <Col md={2}>
        <img
          title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? hidePwdImg : showPwdImg}
          onClick={() => setIsRevealPwd(prevState => !prevState)}
          style={{width:"30px", marginTop:"20%", marginLeft:"-90%"}}
        />
        </Col>
  </Row>

    </div>
  );
}
export default PasswordShowHide;