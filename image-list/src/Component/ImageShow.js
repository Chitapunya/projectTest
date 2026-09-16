function ImageShow({ image }) {
  return (
    <div className="book-show">
      <img
        style={{ width: "150px", height: "150px" }}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageShow;
