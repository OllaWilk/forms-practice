import { useState } from "react";

export default function StateLogin() {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  const emailIsInvalid = data.email !== '' && data.email.includes('@');
  console.log(emailIsInvalid)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submited', data)
  }

  const handleChange= (e) => {
    const {name, value} = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInputBlur = (identifier) => {}
  const handleReset = () => {
    setData({ email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email"
          name="email" 
          value={data.email} 
          onChange={handleChange} 
          onBlur={handleInputBlur} />
          <div className="control-error">{!emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={data.password} onChange={handleChange}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}
