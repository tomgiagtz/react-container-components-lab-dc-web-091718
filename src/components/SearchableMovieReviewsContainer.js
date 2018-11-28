import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
	+ `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

	state = {
		reviews: [],
		searchTerm: ''
	}
	handleSearch = (e) => {
		e.preventDefault()
		fetch(URL + '&query=' + this.state.searchTerm)
			.then(resp => resp.json())
			.then(json => this.setState({ reviews: json.results }))
	}

	handleChange = (e) => {
		this.setState({ searchTerm: e.target.value })
	}

	render() {
		return (
			<div className='searchable-movie-reviews'>
				<form onSubmit={this.handleSearch}><input onChange={this.handleChange}></input><button type='submit'/></form>
					<MovieReviews reviews={this.state.reviews} />
			</div>
				)
			}
		
		}
export default SearchableMovieReviewsContainer