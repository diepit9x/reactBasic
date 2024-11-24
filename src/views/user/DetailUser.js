import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {
  state = {
    data: null,
  };

  async componentDidMount() {
    try {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      if (res && res.data && res.data.data) {
        this.setState({
          data: res.data.data,
        });
      }
    } catch (error) {
      console.error(this.props);
      this.props.history.push("/user");
    }
  }
  render() {
    let { data } = this.state;
    console.log(data);
    return (
      <>
        {data != null ? (
          <>
            <div className="email">Email: {data.email}</div>
            <div className="first-name">First name: {data.first_name}</div>
            <div className="last-name">Last name: {data.last_name}</div>
            <div className="avatar">
              Avatar: <img src={data.avatar}></img>
            </div>
          </>
        ) : (
          <div>loading...</div>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
