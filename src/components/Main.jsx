import React from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const data = useSelector((state) => state.article.articles);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {data.map((item) => (
          <div className="col " key={item.id}>
            <div className="card h-100 shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#55595c"></rect>
              </svg>
              <div className="card-body d-block  ">
                <div className="card-title fw-bold">{item.title}</div>
                <p className="card-text">{item.description}</p>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-success"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
                  <small className="text-body-secondary fw-bold text-capitalize">
                    {item.author.username}
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
