export const ModelTryingOnGlasses = (props) => {
  // Glasses này là giá trị useState đầu vào
  const { glasses } = props;

  return (
    <div className="container">
      <div>
        <div>
          <img
            className="rounded mx-auto d-block mt-4"
            style={{
              width: 500,
              height: 500,
              position: "absolute",
            }}
            src="./glassesImage/model.jpg"
            alt=""
          />
          <img
            className="rounded"
            style={{
              width: 225,
              height: 75,
              position: "relative",
              top: 132,
              left: 135,
            }}
            src={glasses.url}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
