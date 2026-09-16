import IamgeShow from "./ImageShow";

function ImageList({ images }) {
  const renderImage = images?.map((image) => {
    return <IamgeShow key={image.id} image={image} />;
  });
  return <div className="book-list">{renderImage}</div>;
}

export default ImageList;
