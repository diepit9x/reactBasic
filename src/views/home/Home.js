import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    let id = Math.floor(Math.random() * 1000);
    let newUser = {
      id: id,
      name: `random-${id}`,
    };
    this.props.createUserRedux(newUser);
  };

  render() {
    let listUser = this.props.dataRedux;
    return (
      <>
        {listUser &&
          listUser.length > 0 &&
          listUser.map((item) => {
            return (
              <div key={item.id}>
                {item.id} - {item.name} - <button onClick={() => this.handleDeleteUser(item)}>x</button>
              </div>
            );
          })}
        <button onClick={() => this.handleCreateUser()}>add</button>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (user) => dispatch({ type: "DELETE_USER", payload: user }),
    createUserRedux: (newUser) => dispatch({ type: "CREATE_USER", payload: newUser }),
  };
};

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
