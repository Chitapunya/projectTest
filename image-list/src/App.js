import CreateImage from "./Component/CreateImage";
import { useState } from "react";
import SearChImage from "./api";
import ImageList from "./Component/ImageList";
function App() {
  const [images, setImages] = useState([]);

  const renderImage = async ({ name, num }) => {
    const result = await SearChImage(name, Number(num));
    setImages(result);
  };
  console.log(images);

  return (
    <div>
      <CreateImage onSearch={renderImage} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
