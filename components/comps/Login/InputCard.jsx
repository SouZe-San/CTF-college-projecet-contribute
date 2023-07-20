"use client";
import React, { useState } from "react";

// Added style
import "@/components/styles/login/inputCard.scss";

const InputCard = () => {
  const [teamId, setTeamId] = useState("");
  const [password, setPassword] = useState("");

  const userSubmit = () => {
    if (teamId && password) {
      console.log(teamId);
      console.log(password);
    } else {
      alert("Fill correctly ");
    }
  };

  return (
    <div className="input_card">
      <form action={userSubmit} method="post">
        <div className="input_field">
          <div className="input">
            <h4>TeamId</h4>
            <input
              type="text"
              name="teamId"
              onChange={(e) => setTeamId(e.target.value)}
              value={teamId}
              required
            />
          </div>
          <div className="input">
            <h4>password</h4>
            <input
              type="text"
              name="pass"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
        </div>
        <input type="submit" value="log in" className="submit_btn" />
      </form>
    </div>
  );
};

export default InputCard;
