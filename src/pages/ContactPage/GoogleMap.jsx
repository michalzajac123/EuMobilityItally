const GoogleMap = ({ location, zoom = 16 }) => {
  const url = `https://www.google.com/maps?q=${encodeURIComponent(
    location
  )}&z=${zoom}&output=embed`;

  return (
    <div className="w-full h-52 mt-8 rounded-xl overflow-hidden shadow-md">
      <iframe
        title="Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        src={url}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
