import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./createPost.css";

const CreatePost = (props) => {
  let history = useHistory();

  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getText = (e) => {
    setText(e.target.value);
  };

  const createPost = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://warm-ravine-05729.herokuapp.com/admin/blog/new",
      {
        method: "POST",
        body: JSON.stringify({
          title: title,
          text: text,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      history.push("/");
    }
  };

  return (
    <Form className="form-container mx-auto">
      <FormGroup>
        <Label for="title">Post Title</Label>
        <Input
          onChange={getTitle}
          type="text"
          name="title"
          placeholder="Enter title.."
        />
      </FormGroup>
      <FormGroup>
        <Label for="text">Post Text</Label>
        <Input
          onChange={getText}
          type="textarea"
          rows="10"
          name="text"
          className="input-text"
          placeholder="Enter post text..."
        />
      </FormGroup>
      <Button onClick={createPost} color="success">
        Submit
      </Button>
    </Form>
  );
};

export default CreatePost;
