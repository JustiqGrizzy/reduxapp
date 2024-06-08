import React, { useState } from "react";
import { Input, TextArea } from "../ui";
import { useSelector } from "react-redux";

const ArticleForm = (props) => {
  const {
    title,
    setTitle,
    body,
    setBody,
    description,
    setDescription,
    formSubmit,
  } = props;
  const { isLoading } = useSelector((state) => state.article);

  return (
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
          onClick={formSubmit}
          disabled={isLoading}
        >
          {isLoading ? "...loading" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
