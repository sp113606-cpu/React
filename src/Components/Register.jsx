import React from 'react'
import {useForm} from 'react-hook-form'

function Register() {
  
    const { 
      register,
      handleSubmit,
      watch,
      formState: {errors }
     } = useForm();
     console.log(watch("username"));
     

return (
<>

<form action="" method="get"
onSubmit={handleSubmit((data) => { 
  console.log(data);
  
 })}
>
  
  <label htmlFor="username">
    Username </label>
    <input type="text" {...register("username",{minLength:{value:10,message:"this should be min 10 charcter long "}})} name="username" id="username" /> <br />
    <span style={{color:"red"}}>
      {errors.username ? errors.username.message :""}
      </span>

    <button type='submit'>Submit</button>
  
</form>
</>
)
}
export default Register