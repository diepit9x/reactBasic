import React from "react";
import "./Demo.scss";

class ChildComponent extends React.Component {
  state = {
    showList: true,
  };

  handleDelateJob = (id) => {
    this.props.DeleteJob(id);
  };

  render() {
    let { arrJob } = this.props;
    let { showList } = this.state;
    return (
      <>
        {showList ? (
          <>
            {arrJob.map((item) => {
              return (
                <div key={item.id}>
                  {item.title} - {item.salary} - <button onClick={() => this.handleDelateJob(item.id)}>X</button>
                </div>
              );
            })}
            <div className="btn">
              <button className="btn-hide">hide</button>
            </div>
          </>
        ) : (
          <div className="btn">show</div>
        )}
      </>
    );
  }
}

export default ChildComponent;
