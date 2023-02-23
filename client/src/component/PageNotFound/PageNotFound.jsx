import { Link } from "react-router-dom";
import style from "../PageNotFound/PageNotFound.module.css";

export const PageNotFound = () => {
  return (

    <div className={style.PageNotFound}>
      <div className={style.title}>
      <div id="oopss">
        <div id="error-text">
          <span>404</span>
          <p>PAGE NOT FOUND</p>
          <Link to="/">
            <button className={style.btn}>Back To Home</button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};
