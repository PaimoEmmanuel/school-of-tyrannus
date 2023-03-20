const getThumbnail = (id: string) => {
  switch (id) {
    case "Pastor Emeka Egwuchukwu":
      return "/assets/images/video-poster.png";
    case "Pastor Tope Falaye":
      return "/assets/images/favicon.png";
    default:
      return "/assets/images/favicon.png";
  }
};
export default getThumbnail;
