import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJob: [
      { id: 1, title: "dev", salary: 300 },
      { id: 2, title: "test", salary: 100 },
      { id: 3, title: "pm", salary: 1000 },
    ],
  };

  AddJob = (job) => {
    this.setState({ arrJob: [...this.state.arrJob, job] });
    return true;
  };
  DeleteJob = (id) => {
    this.setState((prevState) => ({
      arrJob: prevState.arrJob.filter((job) => job.id !== id),
    }));
  };

  render() {
    return (
      <>
        <AddComponent AddJob={this.AddJob} />
        <ChildComponent arrJob={this.state.arrJob} DeleteJob={this.DeleteJob} />
      </>
    );
  }
}

export default MyComponent;
