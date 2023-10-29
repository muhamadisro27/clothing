import DirectoryItem from "../directory-item/directory-item.component";
import categories from "../../data/categories.json";
import { DirectoryContainer } from "./directory.style.jsx";

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
