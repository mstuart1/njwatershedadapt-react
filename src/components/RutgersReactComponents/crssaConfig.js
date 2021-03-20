const Config = {
  UNIT_NAME: "Grant F Walton Center for Remote Sensing and Spatial Analysis",
  RUTGERS: "Rutgers, The State University of New Jersey",
  STREET_ADDRESS: "14 College Farm Road",
  BUILDING_NAME: "ENRS Bldg",
  CAMPUS: "Cook",
  SCHOOL_NAME: "School of Environmental and Biological Sciences",
  CITY_STATE_ZIP: "New Brunswick, NJ 08901-8551",
  PHONE_NUMBER: "848-932-1528",
  FAX_NUMBER: "973-972-7148",

  WEB_TITLE: "NJ Watershed Adapt",
  WEB_ADDRESS: "https://rutgers.edu",
  WEB_MASTER: "info@crssa.rutgers.edu",

  DEV_API_LOCATION: "",
  PROD_API_LOCATION: "",
  ALLOW_EMPTY_PERMISSIONS: true, //If you want any page that doesn't explicity have user permissions to allow anyone to access it
  // IS_DEV_ENV: function () {
  //   return !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  // },
  // API_LOCATION: function () {
  //   if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  //     return this.DEV_API_LOCATION;
  //   } else {
  //     return this.PROD_API_LOCATION;
  //   }
  // },
  // GET_PAGE_TITLE: function (pageTitle) {
  //   return pageTitle + " | " + this.WEB_TITLE;
  // },
  // axiosConfig: {
  //   baseURL: "http://localhost:" + process.env.REACT_APP_DB_PORT,
  //   proxy: {
  //     host: "localhost",
  //     port: process.env.REACT_APP_DB_PORT,
  //     protocol: "http",
  //   },
  // },
};
export default Config;
