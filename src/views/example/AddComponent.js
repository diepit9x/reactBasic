import React, { useState } from "react";

// class AddComponent extends React.Component {
//   state = {
//     id: 1,
//     title: "",
//     salary: "",
//   };
//   handleOnChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };
//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     if (!this.state.title || !this.state.salary) {
//       alert("missing params");
//       return;
//     }
//     let statusAdd = this.props.AddJob(this.state);
//     if (statusAdd) {
//       alert("success");
//     } else {
//       alert("error");
//     }
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label htmlFor="fname">title:</label>
//           <br />
//           <input type="text" id="fname" name="title" value={this.state.title} onChange={this.handleOnChange} />
//           <br />
//           <label htmlFor="lname">salary:</label>
//           <br />
//           <input type="text" id="lname" name="salary" value={this.state.salary} onChange={this.handleOnChange} />
//           <br />
//           <br />
//           <input type="submit" value="Submit" />
//         </form>
//       </>
//     );
//   }
// }

const AddComponent = (props) => {
  const [formData, setFormData] = useState({ id: 1, title: "", salary: "" });
  const { AddJob } = props;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(">>change: ", event.target.name, event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!formData.title || !formData.salary) {
      alert("missing params");
      console.log(">> ", formData);
      return;
    }
    let statusAdd = AddJob(formData);
    if (statusAdd) {
      alert("success");
    } else {
      alert("error");
    }
  };

  return (
    <>
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label htmlFor="fname">title:</label>
        <br />
        <input type="text" name="title" value={formData.title} onChange={(event) => handleOnChange(event)} />
        <br />
        <label htmlFor="lname">salary:</label>
        <br />
        <input type="text" name="salary" value={formData.salary} onChange={(event) => handleOnChange(event)} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddComponent;
