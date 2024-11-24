import React from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ListUser extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users");
    this.setState({
      listUsers: res && res.data.data ? res.data.data : [],
    });
  }

  render() {
    let { listUsers } = this.state;
    return (
      <>
        {listUsers && listUsers.length > 0 ? (
          <>
            {listUsers.map((user) => {
              return (
                <div>
                  <Link to={`/user/${user.id}`}>
                    {user.id} - {user.first_name}
                  </Link>
                </div>
              );
            })}
          </>
        ) : (
          <>Empty</>
        )}
      </>
    );
  }
}

export default ListUser;
