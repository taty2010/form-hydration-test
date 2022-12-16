import React from "react";
import NetlifyForm from "./NetlifyForm";

export default function Home() {
    return (
      <div >
      <NetlifyForm formName="feedback" method="POST">
        <input type="hidden" name="form-name" value="feedback" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <label htmlFor="name">Name</label>
        <input className="form-field" id="name" type="text" name="name" />

        <label htmlFor="email">Email</label>
        <input className="form-field" id="email" type="email" name="email" required />

        <label htmlFor="feedback">What is your feedback?</label>
        <textarea className="form-field" id="feedback" wrap="soft" name="feedback" required></textarea>
        <button className="button" type="submit">Submit</button>
      </NetlifyForm>
      </div>
    );
  }