# Rutgers React Components

These include the Rutgers banner, a unit banner and the Rutgers footer as described by the university visual branding compliance policy.

I included the styling in the file with the react component to keep everything related to this feature in one place so it is easy to copy from project to project.

These components are designed to be dropped into any react project, however, they can also easily be converted to basic html/css.

Using the RutgersHeader.js file as an example, the top objects like

```javascript
const MenuContainer = styled.div`
  color: #fff;
  background-color: #c03;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;
```

can be converted to raw css by replacing this first line with `.menu-container {` here and anywhere else in the document that contains 'MenuContainer' can be replaced with div class='menu-container' (or if still using react but want to revert to normal css, className in place of class).
