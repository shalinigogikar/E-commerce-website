import React,{useState} from "react";
import { Container,Button,Form } from "react-bootstrap";
    function ContactUs() {
        const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
      
        const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            await fetch("https://e-commerce-d218c-default-rtdb.firebaseio.com//contacts.json", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              });
              alert("Form submitted successfully!");
            setFormData({ name: "", email: "", phone: "" }); // Reset form
          } catch (error) {
            alert("Error submitting form");
            console.error(error);
          }
        };
      
        return (
          <Container className="mt-4">
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required className="mb-2"/>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required className="mb-2"/>
              <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required className="mb-2"/>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Container>
        );
}
export default ContactUs;