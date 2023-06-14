export const bannerImages = [
  {
    id: "kargo-banner",
    alt: "kargo banner",
    desktop: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-desktop-1.jpg"
          : "https://picsum.photos/1472/115",
      width: 1472,
      height: 360,
    },
    tablet: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-tablet-1.jpg"
          : "https://picsum.photos/800/110",
      width: 800,
      height: 250,
    },
    mobile: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-mobile-1.jpg"
          : "https://picsum.photos/540/50",
      width: 540,
      height: 200,
    },
  },
];
