import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Bottombar from "../../components/Bottombar";
import { Form, InputGroup } from "./styles";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

function NewEpisode() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");

  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      link,
      category,
    };

    await api.post("/newepisode", data);

    history.push("/");
  };

  return (
    <>
      <Navbar />
      <Form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>New Episode</legend>
          <InputGroup>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
            <label htmlFor="title"> Title </label>
          </InputGroup>
          <InputGroup>
            <input
              type="text"
              name="link"
              id="link"
              value={link}
              onChange={handleLinkChange}
              required
            />
            <label htmlFor="link"> Link </label>
          </InputGroup>
          <InputGroup>
            <input
              type="text"
              name="category"
              id="category"
              value={category}
              onChange={handleCategoryChange}
              required
            />
            <label htmlFor="category"> Category </label>
          </InputGroup>
          <Button type="submit"> Add episode </Button>
        </fieldset>
      </Form>
      <Footer />
      <Bottombar />
    </>
  );
}

export default NewEpisode;
