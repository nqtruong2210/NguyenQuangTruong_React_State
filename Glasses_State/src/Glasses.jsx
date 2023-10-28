export const Glasses = (props) => {
  const { glasses, tryOn } = props;

  //Hàm trung gian dùng để tránh việc gọi hàm TryOn
  const handleTryOn = (data) => {
    tryOn(data);
  };

  return (
    <div className="row">
      <h1 className="text-start fs-4 me-3 fst-italic">
        <i className="fa-solid fa-right-long me-2"></i>Click On The Glasses You
        Want To Try
      </h1>
      {glasses.map((value) => {
        return (
          <div className="col-4" key={value.id}>
            <div
              className="card"
              style={{
                width: "13rem",
              }}
            >
              <div className="card-body text-center ">
                <img
                  src={value.url}
                  className="card-img-top "
                  alt="..."
                  onClick={() => handleTryOn(value)}
                  style={{
                    cursor: "pointer",
                  }}
                />
                <div className="card-text">
                  <div className="fw-bold mt-3">{value.name}</div>
                  <div className="text-danger">Price: {value.price}$</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
