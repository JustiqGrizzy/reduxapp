import React, { useState } from "react";
import { Input, TextArea } from "../ui";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const createHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-center">Create Article</h1>
      <div className="w-75 mx-auto">
        <form action="">
          <Input label={"Title"} state={title} setState={setTitle} />
          <TextArea
            label={"Description"}
            state={description}
            setState={setDescription}
          />
          <TextArea
            label={"Body"}
            state={body}
            setState={setBody}
            height="300px"
          />
          <button
            className="w-100 btn btn-primary btn-lg mt-3"
            type="submit"
            onClick={createHandler}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateArticle;
