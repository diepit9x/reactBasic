import React from "react";

class Form extends React.Component {
  state = {
    id: null,
    task: "",
  };
  componentDidUpdate(prevProps) {
    if (prevProps.todoEdit.id !== this.props.todoEdit.id) {
      // Cập nhật state khi todoEdit thay đổi
      this.setState({
        id: this.props.todoEdit.id,
        task: this.props.todoEdit.task,
      });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleForm(this.state);
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <input
            type="text"
            value={this.state.task}
            onChange={(event) => {
              this.setState({ task: event.target.value });
            }}
          />
          <button type="submit">{this.state.id != null ? "edit" : "add"}</button>
        </div>
      </form>
    );
  }
}
export default Form;
