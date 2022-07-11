import React, { useState, useContext, useEffect } from "react";

import { Row, Container, Col, Input, Button, InputGroup } from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const context = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("");
  const Navigate = useNavigate();
  const fetchDetails = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
    } catch (error) {
      toast("Not able to fetch the user", { type: "error" });
    }
  };

  useEffect(() => {
    if (!context.user?.uid) {
      return Navigate("/signin");
    }
  }, []);

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />

            <Button onClick={fetchDetails} color="primary">
              Fetch User
            </Button>
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};

export default Home;
