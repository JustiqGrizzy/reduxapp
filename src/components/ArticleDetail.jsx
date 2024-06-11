import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSucces,
} from "../slice/article";
import moment from "moment";
import { Loader } from "../ui";

const ArticleDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { articleDetail, isLoading } = useSelector((state) => state.article);

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    const response = await ArticleService.getArticleDetails(slug);
    try {
      dispatch(getArticleDetailSucces(response.article));
    } catch (error) {
      // dispatch(getArticleDetailFailure());
    }
  };

  useEffect(() => {
    getArticleDetail();
  }, [slug]);
  return (
    <div>
      {isLoading && <Loader />}
      <div className="p-5 mb-4 rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{articleDetail?.title}</h1>
          <p className="col-md-8 fs-4">{articleDetail?.description}</p>
          <p className="text-muted mb-4">
            <span className="fw-bold">Created at: </span>
            {moment(articleDetail?.createdAt).format("DD MMM, YYYY")}
          </p>
          <div class="card my-3 w-50">
            <div class="card-body">
              <h5 class="card-title text-capitalize ">
                {articleDetail?.author?.username}
              </h5>
              <p class="card-text">{articleDetail?.author?.bio}</p>
            </div>
          </div>
          <p>{articleDetail?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
