import PropTypes from "prop-types";
import { Link } from "react-router-dom";    // {}로 Link를 감싸지 않는 경우 에러
import styles from "./Movie.module.css";

function Movie({id, medium_cover_image, title, year, summary, genres}) {
    return (
        <div>
            <img src={medium_cover_image} alt={title} className={styles.movie__img} />
            <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul className={styles.movie__genres}>
            {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    medium_cover_image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;