import React from "react";

const GoogleMap = () => {
  //TODO:src konuma göre güncellenecek
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1530.7525529435077!2d32.69348709298733!3d39.88532206247738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d338ecb1bbfe65%3A0x79ee4958d3686a0f!2sGold&#39;N%20State%20Business%20Center!5e0!3m2!1sen!2str!4v1647197848457!5m2!1sen!2str"
      style={{ border: 0, width: "100%", height: 400 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  );
};

export default GoogleMap;
