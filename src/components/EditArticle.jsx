import React, { useEffect, useState } from "react";
import { ArticleForm } from "./";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSucces,
  postArticleFailure,
  postArticleStart,
  postArticleSucces,
} from "../slice/article";
import { useNavigate, useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    const response = await ArticleService.getArticleDetails(slug);
    try {
      dispatch(getArticleDetailSucces(response.article));
      setTitle(response.article.title);
      setDescription(response.article.description);
      setBody(response.article.body);
    } catch (error) {
      dispatch(getArticleDetailFailure());
    }
  };

  useEffect(() => {
    getArticleDetail();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, body, description };
    dispatch(postArticleStart());
    try {
      await ArticleService.editArticle(slug, article);
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
      <h1 className="text-center">Edit Article</h1>
      <ArticleForm {...formProps} />
    </div>
  );
};

export default EditArticle;
