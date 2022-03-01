import React from "react";

const GoogleMap = () => {
  //TODO:src konuma göre güncellenecek
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1367.718839622892!2d32.425467156348496!3d37.87053988205461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0875067b9b6d5%3A0xb2243ae7f4f9aa36!2zS8O2eWNlxJ9peiBNdWh0YXJsxLHEn8Sx!5e0!3m2!1sen!2str!4v1646157192609!5m2!1sen!2str"
      style={{ border: 0, width: "100%", height: 400 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  );
};

export default GoogleMap;
