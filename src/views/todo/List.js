import React from "react";

class List extends React.Component {
  state = {
    isShow: true,
  };

  handleDelete = (item) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this item?");
    if (isConfirmed) {
      this.props.deleteTodo(item);
    }
  };

  handleEdit = (item) => {
    this.props.updateTodo(item);
  };
  render() {
    let { todoList } = this.props;
    let { isShow } = this.state;
    return (
      <>
        {isShow ? (
          <>
            {todoList.map((item) => {
              return (
                <div key={item.id} style={this.props.todoEdit.id === item.id ? { color: "red" } : {}}>
                  {item.id} - {item.task} -<button onClick={() => this.handleEdit(item)}>edit</button> -<button onClick={() => this.handleDelete(item)}>x</button>
                </div>
              );
            })}
            <div>
              <button
                onClick={() => {
                  this.setState({ isShow: !isShow });
                }}
              >
                ----hide----
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                this.setState({ isShow: !isShow });
              }}
            >
              ----show----
            </button>
          </>
        )}
      </>
    );
  }
}
export default List;
