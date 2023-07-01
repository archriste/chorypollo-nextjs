# Bienvenidos a Tacos El Chorypollo! 🌮
### Introduction
Tacos El Chorypollo is a pair of taco trucks in downtown Des Moines, IA that are well known among the Latino community but up until now have not marketed online. This repo contains the code for the website I built for them to attract new customers and serve as a launching point for expanding brand awareness.

## chorypollo.com ([link](https://chorypollo.com))

### Background
I was tasked with creating a site that matched the general look of the existing Tacos El Chorypollo menu, which has a light green banner on the top and a darker red body with white text overlaid. As company no longer had access to the digital assets (aside from photos) used in its promotional material, new assets were created for use in the website.

Customers viewing a food truck's website are often just looking for the menu and locations, so we kept the content minimal. Furthermore, we wanted to stay true to the character of the business by giving visitors the family-owned look and feel they expected of a local street food spot.

### Features
- Bilingual support for English and Spanish, defaults to user locale
- Responsive navbar with prominently displayed logo
- Carousel with enticing images
- Locations for both taco trucks with map, address, and contact info
- Responsive menu with stateful expandable items in mobile view
- Aria roles for assistive technologies *(to be expanded)*

### Challenges

#### Localization
At first, I was able to successfully implement middleware to ensure that users received content in their language of preference (as declared by their request headers). However, locale changes done manually on the site did not persist through link navigation. I thought it might have been possible to solve the issue with state or session cookies as others had, but ultimately decided on using the active dictionary to return the correct prefixes for link references. This approach may not be suitable for larger projects with high server load, but works well for our purposes.

### Technologies
- **Next.js ([link](https://nextjs.org/))**
- **Tailwind CSS ([link](https://tailwindcss.com/))**
- **Embla Carousel ([link](https://www.embla-carousel.com/))**

### Legal
**The trademarks and logos used in this project (e.g. The Tacos El Chorypollo logo) are the property of Tacos El Chorypollo. Tacos El Chorypollo is not affiliated with any content beyond this repository and does not necessarily endorse the contents of any files contained herein.**
