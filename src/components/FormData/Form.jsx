import { useState } from "react";
import "../../styles/layout/_footer.scss";
function Form({ form }) {
  const [getForm, setGetForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setGetForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!getForm.name || !getForm.phone || !getForm.email) {
      alert("Please fill in all fields");
      return;
    }
  };

  return (
    <>
      <div className="footer-form">
        <p>{form}</p>

        <form onSubmit={handleSubmit}>
          <div className="form-block">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={getForm.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phome"
              value={getForm.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={getForm.email}
              onChange={handleChange}
            />

            <div className="button-block">
              <button>{form}</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Form;
