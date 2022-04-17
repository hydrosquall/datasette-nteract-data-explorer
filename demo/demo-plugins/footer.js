//  Append footer with the Vercel logo to every page.
// TODO: Check if there a way to server-side render this someday?

// Link + picture
const imageElement = document.createElement("img");
imageElement.src =
  "https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg";
const linkElement = document.createElement('a');
linkElement.href =
  "https://vercel.com/?utm_source=datasette-visualization-plugin-demos&utm_campaign=oss";
linkElement.target = "_blank";
linkElement.rel = 'noopener noreferrer';
linkElement.ariaLabel = 'Site hosted by Vercel';

// A block element so we can limit the size of the logo
const buttonElement = document.createElement('div');
buttonElement.style = "width: 212px; padding-left: 1rem";
linkElement.appendChild(imageElement);
buttonElement.appendChild(linkElement);

// Final insertion + add to page.
// A wrapper element to hold everything and supply some background coloring
const sponsorContainer = document.createElement('div');
sponsorContainer.style = 'background-color: rgb(31,41,55); padding-top: 1rem; padding-bottom: 1rem;';
sponsorContainer.appendChild(buttonElement);
// Attach as sibling of the official footer
const footerElement = document.querySelector('footer');
footerElement.insertAdjacentHTML("afterend", sponsorContainer.outerHTML);
