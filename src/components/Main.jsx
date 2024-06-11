import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../ui";
import ArticleService from "../service/article";
import { getArticlesStart, getArticlesSucces } from "../slice/article";
import { ArticleCard } from "./";

const Main = () => {
  const { articles, isLoading } = useSelector((state) => state.article);

  const dispatch = useDispatch();

  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const response = await ArticleService.getArticles();
      dispatch(getArticlesSucces(response.articles));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map((item) => (
          <ArticleCard item={item} getArticles={getArticles} />
        ))}
      </div>
    </div>
  );
};

export default Main;
