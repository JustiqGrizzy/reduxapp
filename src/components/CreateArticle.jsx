import React, { useState } from "react";
import { Input, TextArea } from "../ui";
import { ArticleForm } from "./";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  postArticleFailure,
  postArticleStart,
  postArticleSucces,
} from "../slice/article";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, body, description };
    dispatch(postArticleStart());
    try {
      await ArticleService.postArticle(article);
      dispatch(postArticleSucces());
      navigate("/");
    } catch (error) {
      dispatch(postArticleFailure());
    }
  };
  const formProps = {
    title,
    setTitle,
    body,
    setBody,
    description,
    setDescription,
    formSubmit,
  };

  return (
    <div>
      <h1 className="text-center">Create Article</h1>
      <ArticleForm {...formProps} />
    </div>
  );
};

export default CreateArticle;
