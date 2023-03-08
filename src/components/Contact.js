import './contact.css';

const Contact = () => {
  return (
    <div className="cont-con">
      <div className="contact">
        <div className="con-para">
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="form">
          <form>
            <input type="text" name="name" id="name" placeholder="NAME" />
            <input type="email" name="email" id="email" placeholder="EMAIL" />
            <textarea
              className="form-control"
              id=""
              cols="14"
              rows="4"
              placeholder="YOUR MEASSAGE"
              name="message"
            ></textarea>
          </form>
          <button className="btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
