import React from "react";
import { useState } from "react";
import style from "../styles/contact.module.css";
import Head from "next/head";

function Contact() {
  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [phone, setphone] = useState();
  const [textarea, settextarea] = useState();

  const handleOnChange = (e) => {
    if (e.target.name === "email") setemail(e.target.value);
    else if (e.target.name === "textarea") settextarea(e.target.value);
    else if (e.target.name === "phone") setphone(e.target.value);
    else if (e.target.name === "name") setname(e.target.value);
  };

  const handleSubmit = async (e) => {


    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, textarea: textarea ,phone: phone}),
    });
    if (response === "success") {

      setemail("");
      setname("");
      setphone("");
      settextarea("");
    } else {
      console.log(response, "Write operation failed");
    }

  };

  return (
    <>
      <Head>
        <title>Lang Verse | Contact</title>
        <link rel="icon" href="/blogger.png" />
     </Head>
      <style jsx>
        {`
          h4 {
          color: rgb(180, 137, 252);
          }
          .mb-3{
          display: flex;
          flex-direction: column;
          // margin-top: 10px;
          // margin-bottom: 10px;
          }
          .column_color{
          border: 1px solid rgb(55, 65, 81);
          }
          .contactform_con{
          padding-top: 30px;
          padding-bottom: 30px;
          }
          .contactus_con{
          padding-top: 30px;
          }
          @media (min-width: 0px) and (max-width: 1000px) {
            .row {
              flex-direction: column;
            }
            .contactus_con{
              width: 100%;
            }
            .contactform_con{
              margin-top: 50px;
              width: 100%;
            }  
          }
        `}
      </style>
      <div className={`${style.contactus_container} container`}>
        <div className={`${style.contactus_firstcontainer} row d-flex justify-content-evenly gx-5`}>

        <div className="col-md-5 column_color contactus_con">
          <div className={style.contactus_text}>
          <h4>GET IN TOUCH WITH US</h4>
          Welcome to our Hunting Coder community! We value your input and
          encourage you to reach out if you have any questions, suggestions, or
          just want to connect with fellow coding enthusiasts. Our "Contact Us"
          section serves as a direct line between you and our team. Whether
          you're seeking assistance with a coding challenge, have feedback on
          our content, or want to contribute your own insights, we're here to
          listen.
          <div>Feel free to drop us a message, and we'll do our best to
          respond promptly. Your engagement is what makes our coding journey
          richer, and we look forward to hearing from you. Happy coding!</div>
          </div>
        </div>

        <div className="col-md-6 column_color contactform_con">
          <form className={style.contact_form}>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={style.form_control}
              onChange={handleOnChange}
              value={name}
              name="name"
              id="name"  required/>
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={style.form_control}
              onChange={handleOnChange}
              name="email"
              value={email}
              id="email"  required/>
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className={style.form_control}
              onChange={handleOnChange}
              name="phone"
              value={phone} pattern="[0-9]{10}"
              id="phone"  required/>
          </div>
          <div className="mb-3">
            <label for="textarea" className="form-label">
              Message
            </label>
            <textarea
              className={style.form_control}
              onChange={handleOnChange}
              name="textarea"
              id="textarea"
              value={textarea}
              rows="3"
              placeholder="Write your concern here!" 
            ></textarea>
            <button className={style.form_submit} onClick={handleSubmit}>Let's Connect</button>
          </div>
        </form>
        </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
