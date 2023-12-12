/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { Navbar } from "./components/index";
import { Routes, Route, Link } from "react-router-dom";
import { CreatePost, Home } from "./pages/index";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </Container>
    </>
  );
}
