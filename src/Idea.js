import React from "react";
import { withRouter } from "react-router-dom";
import { deleteSubmission } from "./CoCreateApi";

class Idea extends React.Component {
  handleCurrentDelete = () => {
    const deleteCurrentSubmission = deleteSubmission(this.props.idea.id);
    deleteCurrentSubmission.then(response => {
      console.log("deleted sub", response.data);
      this.setState({ deleteSubmission: response.data });
    });
  };

  handleCurrentIdeaEdit = () => {
    const ideaId = this.props.idea.id;
    console.log(this.props.idea.id);
    this.props.editSubmission(ideaId);
  };

  render() {
    const idea = this.props.idea;
    return (
      <div
        className="card-body"
        style={{
          //borderBottom: "black solid 2px"
          borderBlockStart: "black solid 2px"
        }}
      >
        <div />
        <h1
          className="card-heading"
          onClick={this.handleCurrentIdeaEdit}
          style={{
            //  backgroundColor: "black",
            fontSize: "35px"
            // color: "#fefaf2"
          }}
        >
          {idea.title}
        </h1>
        <ul>
          <li className="media">
            <span className="media-body">
              <img
                src={idea.image}
                style={{ width: "300px", height: "300px" }}
              />
            </span>
          </li>
          <li className="media">
            <span className="media-body">{idea.description}</span>
            <span>
              <img
                src="https://cdn3.iconfinder.com/data/icons/miniglyphs/500/097-512.png"
                onClick={this.handleCurrentDelete}
                style={{ width: "25px", height: "20px", paddingLeft: "10px" }}
              />
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
export default withRouter(Idea);
