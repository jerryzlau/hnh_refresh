import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <div className="zh">天下仁心醫療集團</div>
          <div className="en">Humanity and Health Medical Centre</div>
          <div className="lic">Day Medical Centre Licence No. DP000128 · ©2026 Humanity and Health Medical Centre</div>
        </div>
        <Link className="btn" to="/contact">Make an Appointment</Link>
      </div>
    </footer>
  );
}
