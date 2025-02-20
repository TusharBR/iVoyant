import { Form, Input, Button, Layout } from "antd";
import { useEffect, useState } from "react";
import Logosvg from "../atoms/Logosvg";

const { Header, Footer, Content } = Layout;

const MyForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  interface FormDataType {
    name: string;
    email: string;
    phone: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormDataType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  useEffect(()=>{
    console.log(formData);
  },[formData])
  const onSubmit = () => {
    setFormData([...formData, form]);
  
  };

  return (
    <Layout style={{ minHeight: "97vh", padding: "20px", fontSize: "16px", fontFamily: "cursive", backgroundColor: "white"}}>
    
      <Header style={{ backgroundColor: "white", textAlign: "center" }}>
        <Logosvg />
      </Header>

      <Content>
        <Form layout="vertical" onFinish={onSubmit}>
  
          <Form.Item label="Name" name="name" rules={[{ message: "Please enter your name!" }]}>
            <Input name="name" required value={form.name} onChange={handleChange} placeholder="Enter your name" />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{  type: "email", message: "Please enter a valid email!" }]}>
            <Input name="email" required value={form.email} onChange={handleChange}  placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Phone Number" name="phone" rules={[{  message: "Please enter your 10-digit phone number!" }]}>
            <Input required name="phone" value={form.phone} onChange={handleChange} pattern="^[9][0-9]{9}$" title="Please enter a valid 10-digit phone number!" placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item label="Message" name="message" rules={[{  message: "Please enter a message!" }]}>
            <Input.TextArea required rows={8} name="message" value={form.message} onChange={handleChange} placeholder="Enter your message" />
          </Form.Item>

          <Form.Item style={{display:"flex",justifyContent:"center"}}>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>

      <Footer style={{ backgroundColor: "white",padding:"5px" ,display:"flex",justifyContent:"center",border:"2px solid #1677ff",fontSize:"16px"}}>
       <span >&copy;Copyrights 2025 &nbsp; &nbsp; </span>
       <span> <img width={"110px"} src="https://cdn.prod.website-files.com/669c0714da1ae90bdf0d9b64/669c0ddc40b96ba8cd916a8e_Vectors-Wrapper.svg" alt="" /> </span>
      </Footer>
    </Layout>
  );
};

export default MyForm;
