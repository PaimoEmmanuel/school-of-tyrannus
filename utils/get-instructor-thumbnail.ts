const getThumbnail = (id: string) => {
  switch (id) {
    case "Pastor Emeka Egwuchukwu":
      return "/assets/images/video-poster.png";
    case "Pastor Tope Falaye":
      return "/assets/images/pst-tope.png";
    default:
      return "/assets/images/pst-tope.png";
  }
};
export default getThumbnail;
