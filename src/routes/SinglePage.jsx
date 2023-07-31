import { useParams } from "react-router-dom";

const aboutData = [
  {
    slug: "about-app",
    title: "About the app",
    description:
      "With this application, users can effortlessly add, edit, and delete to-dos. For the delete feature, logging in is required. Moreover, the app ensures that your to-dos are saved in the browser's local storage, ensuring they're accessible for your next visit.",
  },
  {
    slug: "about-developer",
    title: "About the developer",
    description:
      "Harshal Patil, Front-End React Developer, is driven by a passion for exploring cutting-edge web features and crafting practical guides. Connect with Me on Instagram @https.harshal to delve into the world of modern web development.",
  },
];

const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main_content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default SinglePage;
