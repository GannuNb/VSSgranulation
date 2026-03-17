"use client";
import styles from "../../styles/Contact.module.css";
import { useState } from "react";



export default function Contact() {

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setStatus("Sending message...");

    try {

      const res = await fetch("https://vssgranulation.com/send-email.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {

        setStatus("✅ Message sent successfully!");
        form.reset();

      } else {

        setStatus(`❌ ${data.message || "Failed to send message"}`);

      }

    } catch (err) {

      console.error(err);
      setStatus("❌ Server error. Please try again.");

    }

    setLoading(false);
  };

  return (

    <section className={styles.contactSection}>

      <div className={styles.container}>

        <h1 className={styles.title}>Contact Us</h1>

        <p className={styles.subtitle}>
          Have questions about our products or services? Get in touch with us.
        </p>

        <div className={styles.contactGrid}>

          {/* Contact Info */}

          <div className={styles.contactInfo}>

            <h3>VSS Granulation Private Limited</h3>

            <div className={styles.infoItem}>
              <strong>Admin Office</strong>

              <p>
                #406, 4th Floor, Patel Towers, Above EasyBuy,
                Beside Nagole RTO Office, Nagole,
                Hyderabad, Telangana - 500068
              </p>

            </div>

            <div className={styles.infoItem}>

              <strong>Unit Address</strong>

              <p>
                Shed No.1 in Plot No.14 (Site-A),
                IP Rampur, Kazipet Mandal,
                Hanumakonda Dist,
                Telangana - 506151
              </p>

            </div>

            <div className={styles.infoItem}>

              <strong>📞 Phone</strong>

              <p>+91 4049471616</p>

            </div>

            <div className={styles.infoItem}>

              <strong>✉ Email</strong>

              <p>info@vssgranulation.com</p>

            </div>

          </div>


          {/* Contact Form */}

          <form className={styles.contactForm} onSubmit={handleSubmit}>

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              name="subject"
              type="text"
              placeholder="Subject"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p style={{ marginTop: "10px" }}>
                {status}
              </p>
            )}

          </form>

        </div>


        {/* Google Maps Section */}

        <div className={styles.mapGrid}>

          <div className={styles.mapItem}>

            <h3>Admin Office</h3>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.9044820888157!2d78.5527578850623!3d17.368328660866318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99eeab8a7795%3A0x89760778e2498478!2sPatel%20Towers!5e0!3m2!1sen!2sin!4v1773051925883!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{
                border: 0,
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>


          <div className={styles.mapItem}>

            <h3>Unit Address</h3>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973074.650922223!2d78.37033566821687!3d17.694018138272455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33532c835d494d%3A0x271cd892f8949be8!2sVikah%20Rubbers%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1773051999620!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{
                border: 0,
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </div>

    </section>
  );
}