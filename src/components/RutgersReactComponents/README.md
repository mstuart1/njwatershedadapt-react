# Rutgers React Components

These include the Rutgers banner, a unit banner and the Rutgers footer as described by the university visual branding compliance policy.

I included the styling in the file with the react component to keep everything related to this feature in one place so it is easy to copy from project to project.

These components are designed to be dropped into any react project, however, they can also easily be converted from styled-components to basic html/css.

# Folder contents

- [fonts](fonts) - the UnitHeader uses Libre Baskerville font instead of a logo
- [contactInfo](contactinfo.js) - This contact info is used in the footer.
- [RUTGERS_REVWHITE](RUTGERS_REVWHITE.png) - The word "Rutgers" in white for placement on a red banner.
- [RutgersFooter](RutgersFooter.js) - The gray contact info and RU links as well as a black copywrite and accessiblity info footer.
- [RutgersHeader](RutgersHeader.js) - A red banner to hold the white Rutgers logo, contains the 3 links found at the top of any webpage.
- [UnitHeader](UnitHeader.js) - The Unit header is a white banner to hold the School Name and the Unit name, found in the contactInfo file.

# How to convert from styled-components to normal HTML + CSS:

```javascript
const MenuContainer = styled.div`
  color: #fff;
  background-color: #c03;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;
```

Using the RutgersHeader.js file as an example, the top objects like the code above can be converted to raw css by replacing this first line with `.menu-container {` here. Anywhere else in the document that contains 'MenuContainer' can be replaced with `div class='menu-container'` (or if still using react but want to revert to normal css, className in place of class).
