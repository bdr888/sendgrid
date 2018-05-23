import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.state = {
      search: "",
      posts: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    fetch("https://techcrunch.com/wp-json/wp/v2/posts")
      .then(response => {
        return response.json();
      })
      .then(myJson => this.setState({ posts: myJson }));
  };

  handleSearchInput = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row flex-row">
          <div className="row flex-column">
            <div className="colfax hero flex-column">
              <h1 style={{color: "white"}}>SendGrid Web <div>Developer</div> <div>Challenge</div></h1>
            </div>
            <div className="search flex-column">
            <h2 style={{color: "#808080"}}>Find an Article</h2>
            <div className="input-text-wrap is-search">
              <label
                className="input-text-label"
                htmlFor="input-text-example-search"
              >
              </label>
              <input
                type="text"
                id="input-text-example-search"
                value={this.state.search}
                onChange={this.handleSearchInput}
                placeholder="Search"
              />
            </div>
            </div>
            </div>

            <div className="col-8 width">
              <div className="content-block">
                <div className="card is-centered height">
                  <span className="badge mantis">Featured</span>
                  <h2>
                    Our People, Our Story: Diversity and Inclusion at SendGrid
                  </h2>
                  <p />
                  <p className="proxima-nova is-size-h4 is-weight-medium">
                    BY: Patty Money
                  </p>
                  <p className="proxima-nova is-size-h4 is-weight-light">
                    April 30, 2018 - 8 min read
                  </p>
                  <a className="btn btn-primary">Read Story</a>
                </div>
              </div>
            </div>
          </div>

          {this.state.posts.map(post => (
            <div key={post.id} className="row">
              <div className="col-6 offset-3">
                <div className="content-block">
                  <div className="card is-centered">
                    <h4 style={{ color: "#00e5ff" }}>{post.slug}</h4>
                    <h2>
                      <a
                        style={{ color: "black" }}
                        href={post.link}
                        target="_blank"
                      >
                        {post.title.rendered}
                      </a>
                    </h2>
                    <p />
                    <p className="proxima-nova is-size-h4 is-weight-medium">
                      By: {post.author}
                    </p>
                    <p className="proxima-nova is-size-h4 is-weight-light">
                      {post.date} - 8 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
