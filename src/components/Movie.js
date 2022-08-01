import PropTypes from "prop-types";
import { Link } from "react-router-dom";    // {}로 Link를 감싸지 않는 경우 에러

function Movie({medium_cover_image, title, summary, genres}) {
    return (
        <div>
            <img src={medium_cover_image} alt={title} />
            <h2>
                {/** <React.StrictMode>의 경우 Link로 url만 바뀌고 화면이 갱신되지 않음 */}
                <Link to="/movie">{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
            {genres.map(g =>
                <li key={g}>{g}</li>
            )
            }
            </ul>
        </div>
    );
}

Movie.propTypes = {
    medium_cover_image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;