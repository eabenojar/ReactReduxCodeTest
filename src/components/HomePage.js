import React, { Component } from "react";
import "../styles/HomePage.css";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import { getImages } from "../actions/searchActions";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: [],
      loading: true,
      updated: false,
      photoTitle: "",
      inValidSearch: false,
      success: false,
      error: false
    };
  }
  componentDidMount() {
    let value = "ocean";
    this.props.getImages(value);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.state.stat === "ok") {
      const { photo } = nextProps.state.photos;
      this.setState({
        data: photo,
        success: true
      });
    } else {
      this.setState({
        error: true
      });
    }
  }
  handleChange = event => {
    this.setState({
      search: event.target.value,
      inValidSearch: false
    });
  };
  onSubmit = event => {
    let value = this.state.search;
    if (value.length > 0) {
      this.props.getImages(value);
      this.setState({ updated: true, photoTitle: value });
    } else {
      this.setState({ inValidSearch: true });
    }

    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div className="search-container">
          <h1 className="home-page-title">
            {this.state.updated === false
              ? "Flicker App"
              : this.state.photoTitle.charAt(0).toUpperCase() +
                this.state.photoTitle.slice(1) +
                " Photos"}
          </h1>
          <h1 className="home-page-description">Amazing photos.</h1>
          <h1 className="home-page-description">
            Find something inspiring from our community.
          </h1>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="Search"
              placeholder={
                this.state.inValidSearch
                  ? "Please enter a valid search term"
                  : "Search photos"
              }
              onChange={this.handleChange}
              id="search-input"
            />
          </form>
        </div>
        <div className="tag-section">
          {this.state.data.length > 0 ? (
            this.state.data.map((item, i) => {
              return (
                <div className="tag-container" key={i}>
                  <img
                    src={`https://farm${item.farm}.staticflickr.com/${
                      item.server
                    }/${item.id}_${item.secret}.jpg`}
                    alt="No image found"
                    className="img-responsive"
                  />
                </div>
              );
            })
          ) : this.state.success && this.state.data.length === 0 ? (
            <h1 className="home-page-title">No Images Found</h1>
          ) : !this.state.error ? (
            <ClipLoader
              sizeUnit={"px"}
              size={100}
              color={"#FFF"}
              loading={this.state.loading}
            />
          ) : (
            <h1 className="home-page-title">Error</h1>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state: state.data
  };
};
export default connect(
  mapStateToProps,
  { getImages }
)(HomePage);
