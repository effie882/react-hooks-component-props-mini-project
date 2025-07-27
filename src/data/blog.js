// blog.js
const blogName = "Overreacted";

const blogAbout = {
  image: "https://via.placeholder.com/215",
  about: "Personal blog by Dan Abramov. I explain with words and code."
};

const posts = [
  {
    id: 1,
    title: "React is a pain",
    date: "March 10, 2020",
    preview: "Let's talk about why React makes me cry.",
    minutes: 5,
  },
  {
    id: 2,
    title: "Learning Hooks",
    date: "March 12, 2020",
    preview: "Hooks are confusing until they aren't.",
    minutes: 30,
  },
];

export { blogName, blogAbout, posts };
