function ProductDetail({ img, name, price, sold }) {
    return (
        <div className="container container1  w-75 rounded-5 mt-5 pt-5 pb-4">
            <div className="row justify-content-center">
                {/* Left side - Image */}
                <div className="col-lg-5 col-md-5 text-center mb-4 mb-md-0">
                    <img
                        src={img}
                        alt={name}
                        style={{
                            width: "100%",
                            maxWidth: "380px",
                            height: "300px",
                            borderRadius: "10px",
                            objectFit: "cover",
                            boxShadow: "0px 0px 5px grey"
                        }}
                    />
                </div>

                {/* Center - Details */}
                <div className="col-lg-6 col-md-7 mb-4">
                    <p className="mb-2 fs-5 fw-bold">{name}</p>
                    <h4 className="fw-bold mb-2 fst-italic text-danger">{price}</h4>
                    {/* Rating */}
                    <div className="mb-2">
                        ⭐⭐⭐⭐⭐ <span className="text-mute fst-italic fw-bold">(853 reviews) </span>
                        <span className="text-primary fw-bold">{sold}</span>
                    </div>

                    {/* Stock info */}
                    <p className="text-success fw-bold mb-2">In Stock</p>

                    {/* Description */}
                    <p className="mb-3">
                        This is a premium quality product, designed for comfort and style.
                        Perfect for everyday wear and special occasions. Limited stock
                        available, so grab yours now!
                    </p>

                    <div className="d-flex flex-column flex-md-row gap-3 mb-3">
                        <button className="btn btn-primary w-100 py-2 fw-semibold">
                            Add to Cart
                        </button>
                        <button className="btn btn-danger w-100 py-2 fw-semibold">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
