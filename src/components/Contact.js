import './contact.css'
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
          <input type="text" name="name" id="name" />
          <input type="email" name="email" id="email" />
          <input type="text" name="message" id="message" />
          <button>Send Message</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
