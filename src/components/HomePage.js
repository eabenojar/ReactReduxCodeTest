import React, { Component } from "react";
import axios from "axios";
import "../styles/HomePage.css";

const API_KEY = "d5a0f33900852e696aa51e4cdbadc159";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: []
    };
  }
  componentDidMount() {
    console.log("MOUNTED!");
    let value = "ocean";
    const url = `https://api.flickr.com/services/rest/?method=flickr.tags.getClusterPhotos&api_key=d5a0f33900852e696aa51e4cdbadc159&tag=${value}&format=json&nojsoncallback=1`;
    axios
      .get(url, {
        responseType: "json"
      })
      .then(
        function(response) {
          // var obj = JSON.parse(response.data);
          console.log("Submit Success", response);
          if (response) {
            console.log("SUCCESS RES");
            this.setState({
              data: response.data.photos.photo
            });
          }
        }.bind(this)
      )

      .catch(function(error) {
        console.log(error);
      });
  }
  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      search: event.target.value
    });
  };
  onSubmit = event => {
    console.log("SUBMIT SEARCH", this.state.search);
    let value = this.state.search;
    const url = `https://api.flickr.com/services/rest/?method=flickr.tags.getClusterPhotos&api_key=d5a0f33900852e696aa51e4cdbadc159&tag=${value}&format=json&nojsoncallback=1`;
    axios
      .get(url, {
        responseType: "json"
      })
      .then(
        function(response) {
          // var obj = JSON.parse(response.data);
          console.log("Submit Success", response);
          if (response) {
            console.log("SUCCESS RES");
            this.setState({
              data: response.data.photos.photo
            });
          }
        }.bind(this)
      )

      .catch(function(error) {
        console.log(error);
      });
    event.preventDefault();
  };
  render() {
    console.log("render", this.state.data, this.state.data.length);
    return (
      <div className="container">
        <div className="search-container">
          <h1 className="home-page-title">Flicker App</h1>
          <h1 className="home-page-description">Amazing photos.</h1>
          <h1 className="home-page-description">
            Find something inspiring from our community.
          </h1>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="Search"
              placeholder="Search photos"
              onChange={this.handleChange}
              id="search-input"
            />
          </form>
        </div>
        <div className="tag-section">
          {this.state.data.length > 0
            ? this.state.data.map(item => {
                return (
                  <div className="tag-container">
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
            : this.state.data.map(item => {
                return (
                  <div className="tag-container">
                    <img
                      src={`https://farm${item.farm}.staticflickr.com/${
                        item.server
                      }/${item.id}_${item.secret}.jpg`}
                      alt="No image found"
                      className="img-responsive"
                    />
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}
{
}
export default HomePage;
