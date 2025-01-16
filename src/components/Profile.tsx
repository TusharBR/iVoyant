import  { useState } from "react";

interface details {
  name: string;
  age: number;
}

const Profile= () => {
  const [formData, setFormData] = useState<details>({ name: "", age:0 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <label htmlFor="">Name : </label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="name"
      /><br/>
      <br/>
      <label htmlFor="">age : </label>
      <input
      type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="age"
      />
      <p>name: {formData.name}</p>
      <p>age: {formData.age}</p>
    </div>
  );
};
export default Profile