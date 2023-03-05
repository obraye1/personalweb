import "./contact.css";
const Contact = () => {
  return (
    <main>
      <div className="contact">
        <h4>Contact</h4>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
        <form>
          <label>Name</label>
          <input type="text" name="name" id="name" />

          <label>Email</label>
          <input type="email" name="email" id="email" />
          
          <textarea
            className="form-control"
            id=""
            cols="14"
            rows="4"
            placeholder="Your message"
            name="message"
          ></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
