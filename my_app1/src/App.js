import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Form from "./components/Form/Form"
import './App.css'
function App() {
  const [userForm, setUserForm] = useState({
    userName: "",
    password: ""
  })

  const onValidation = () => {
    if (userForm.userName === "" || userForm.password === "") {
      alert("Geçersiz Form")
    } else {
      alert("Form Gönderildi")
    }
  }
  return (
    <div className="custom-page">

      <Form>
        <h2>Giriş Sayfası</h2>
        <Input value={userForm.userName} placeholder={"Kullanıcı Adı"} onChange={(e) => {
         
          setUserForm({ ...userForm, userName: e.target.value })
        }} />

        <Input type="password" value={userForm.password} placeholder={"Parola"} onChange={(e) => {
          
          setUserForm({ ...userForm, password: e.target.value })
        }} />

        <Button text="Giriş Yap" onClick={onValidation} />
      </Form>

    </div>
  );
}

export default App;
