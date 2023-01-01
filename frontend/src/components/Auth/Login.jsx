import { useState } from "react";
import "./Login.module.scss";


function Login(){
    const initialValues = {username: "", email: "", password: ""};
    const [formValues, setFormValues]= useState(initialValues);
    const [FormErrors, setFormErrors]= useState({});

    const handleChange= (e) =>{
        const {name,value}= e.target;
        setFormValues({...formValues,[name]:value});
        console.log(formValues);
    };

    const handleSubmit= (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
    };

    const validate=(values)=>{

    }

  return(
   <div className="container">
    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form"></div>
        <div className="field">
            <label>Username</label>
            <input
             type="text"
              name="username" 
              placeholder="Username" 
              value={formValues.username}
              onChange={handleChange}/>
        </div>
        <div className="field">
            <label>Email</label>
            <input
             type="email" 
             name="email"
              placeholder="Email"
             value={formValues.email}
             onChange={handleChange}/>
        </div>
        <div className="field">
            <label>Password</label>
            <input 
            type="password" 
            name="password"
             placeholder="Password" 
             value={formValues.password}
             onChange={handleChange}/>
        </div>
        <button className="fluid ui button blue"> Submit</button>
    </form>
   </div>
  );
};

export default Login;