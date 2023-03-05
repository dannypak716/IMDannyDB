import React from 'react';
import { connect } from 'react-redux';
import { removeFavorites } from '../actions/favoritesActions';
import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {

    const handleRemoveFavorites = (id) => {
        props.removeFavorites(id);
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        
        {
            props.favorites.map(movie=>{
                return <div className="btn btn-light savedButton" key={movie.id}>
                    <Link className="text-decoration-none" to={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                    <span><span class="material-icons"onClick={()=>handleRemoveFavorites(movie.id)} >remove_circle</span></span> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return({
        favorites: state.favoritesState.favorites
    })
}

export default connect(mapStateToProps, { removeFavorites })(FavoriteMovieList);