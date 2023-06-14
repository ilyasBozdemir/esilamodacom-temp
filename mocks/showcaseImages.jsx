export const showcaseImages = [
  {
    id: "top-full-picture",
    alt: "top full picture",
    desktop: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-desktop-1.jpg"
          : "https://picsum.photos/1472/360",
      width: 1472,
      height: 360,
    },
    tablet: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-tablet-1.jpg"
          : "https://picsum.photos/800/250",
      width: 800,
      height: 250,
    },
    mobile: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-mobile-1.jpg"
          : "https://picsum.photos/540/200",
      width: 540,
      height: 200,
    },
  },
  {
    id: "left-big-picture",
    alt: "left big picture",
    desktop: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-desktop-1.jpg"
          : "https://picsum.photos/472/728",
      width: 1472,
      height: 360,
    },
    tablet: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-tablet-1.jpg"
          : "https://picsum.photos/472/728",
      width: 800,
      height: 250,
    },
    mobile: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-mobile-1.jpg"
          : "https://picsum.photos/472/728",
      width: 540,
      height: 200,
    },
  },
  {
    id: "right-big-picture",
    alt: "right big picture",
    desktop: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-desktop-1.jpg"
          : "https://picsum.photos/472/728",
      width: 1472,
      height: 360,
    },
    tablet: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-tablet-1.jpg"
          : "https://picsum.photos/472/728",
      width: 800,
      height: 250,
    },
    mobile: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-mobile-1.jpg"
          : "https://picsum.photos/472/728",
      width: 540,
      height: 200,
    },
  },
  {
    id: "right-small-picture",
    alt: "right small picture",
    desktop: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-desktop-1.jpg"
          : "https://picsum.photos/305/305",
      width: 1472,
      height: 360,
    },
    tablet: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-tablet-1.jpg"
          : "https://picsum.photos/305/305",
      width: 800,
      height: 250,
    },
    mobile: {
      src:
        process.env.NODE_ENV !== "development"
          ? "/mocks/image-mobile-1.jpg"
          : "https://picsum.photos/472/472",
      width: 540,
      height: 200,
    },
  },
];
