import React from "react";
import List from "./List";
import Form from "./Form";

class ListTodo extends React.Component {
  state = {
    todoEdit: {},
    count: 3,
    todoList: [
      { id: 1, task: "task 1" },
      { id: 2, task: "task 2" },
      { id: 3, task: "task 3" },
    ],
  };

  handleAddTodo = (newTodo) => {
    let count = ++this.state.count;
    newTodo.id = count;
    this.setState({
      count: count,
      todoList: [...this.state.todoList, newTodo],
    });
  };

  handleEditTodo = (editTodo) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((todo) => (todo.id === editTodo.id ? { ...todo, task: editTodo.task } : todo)),
    }));
    this.setState({
      todoEdit: {
        id: null,
        task: "",
      },
    });
  };

  handleForm = (todo) => {
    todo.id == null ? this.handleAddTodo(todo) : this.handleEditTodo(todo);
  };
  deleteTodo = (item) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter((todo) => todo.id !== item.id),
    }));
  };

  updateTodo = (item) => {
    console.log(item);
    this.setState({ todoEdit: item });
  };

  render() {
    return (
      <>
        <br />
        <Form todoEdit={this.state.todoEdit} handleForm={this.handleForm} />
        <br />
        <List todoEdit={this.state.todoEdit} todoList={this.state.todoList} updateAction={this.updateAction} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
      </>
    );
  }
}
export default ListTodo;
