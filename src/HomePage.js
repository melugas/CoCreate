import React, { Component } from "react";
import { FormGroup } from "reactstrap";
import {
  getAllSubmissions,
  postSubmission,
  getSubmissionById,
  putSubmission
} from "./CoCreateApi";
import Idea from "./Idea";

//import logo from "./logo.svg";
import "./App.css";

class HomePage extends Component {
  state = {
    id: null,
    title: "",
    description: "",
    image: "",
    ideas: [],
    addIdeaForm: false,
    inEditMode: false
  };

  componentDidMount() {
    const getAllSubmissionsPromise = getAllSubmissions();

    getAllSubmissionsPromise
      .then(response => {
        console.log(response);
        this.setState({ ideas: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleForm = () => {
    this.setState({ addIdeaForm: !this.state.addIdeaForm });
  };

  activeEditMode = id => {
    const subId = this.props.match.params.id;
    console.log(this.props);
    if (id) {
      getSubmissionById(id).then(response => {
        console.log(response.data);
        this.setState({
          ...response.data,
          inEditMode: !this.state.inEditMode,
          selectedId: id,
          addIdeaForm: !this.state.addIdeaForm
        });
        console.log(response.data);
      });
    }
  };

  handleInputChange = e => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value });
  };

  onSubmit = e => {
    e.preventDefault();

    const subId = this.props.id;
    console.log(this.props.match.params.id);

    const { id, title, description, image } = this.state;

    if (id) {
      const putCurrentSubmission = putSubmission(id, title, description, image);

      putCurrentSubmission
        .then(response => {
          console.log(response.data);
          this.setState(response.data);
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      const submissionCreate = postSubmission(title, description, image);

      submissionCreate
        .then(response => {
          this.setState(response.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  render() {
    const { title, description, image } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <img
            src="https://banner2.kisspng.com/20180204/tse/kisspng-los-angeles-logo-los-angeles-transparent-background-5a77db156a9f09.9113809315178043094367.jpg"
            style={{ width: "120px", height: "55px" }}
          />
          <h1 className="App-title">CoCreate</h1>
        </header>
        <p className="App-intro">
          Co-creating projects in your city. Submit your idea below.
        </p>
        <button
          type="submit"
          className="btn btn-default"
          onClick={this.toggleForm}
        >
          Add Your Idea
        </button>
        {this.state.addIdeaForm && (
          <div className="container">
            <div className="col-md-4 align-center" style={{ marginLeft: 370 }}>
              <FormGroup>
                <div>
                  <label for="Title">Title</label>
                  <input
                    type="text"
                    className="form-control input-group mb-3"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div>
                  <label for="Description">Description</label>
                  <textarea
                    className="form-control input-group mb-3"
                    rows="3"
                    name="description"
                    placeholder="Your idea in a few lines"
                    value={description}
                    onChange={this.handleInputChange}
                  />
                  <label for="Image">Image Url</label>
                  <input
                    type="text"
                    className="form-control input-group mb-3"
                    id="image"
                    name="image"
                    placeholder="Image Url"
                    value={image}
                    onChange={this.handleInputChange}
                  />
                  {/* <div>
                    
                  <input type="file" id="fileInput" />
                  <p className="help-block" />
                </div> */}
                </div>
                <button
                  type="submit"
                  className="btn btn-default"
                  onClick={this.onSubmit}
                >
                  Submit
                </button>
              </FormGroup>
            </div>
          </div>
        )}
        <h2 style={{ paddingBottom: "10px", paddingTop: "20px" }}>
          Submissions
        </h2>
        <div
          className="col-md-12"
          style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
        >
          {this.state.ideas.map(idea => (
            <Idea
              idea={idea}
              {...this.props}
              key={idea.id}
              editSubmission={this.activeEditMode}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default HomePage;
