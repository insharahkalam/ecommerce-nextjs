function Section3(){
    return(
        <div>

    {/* Section 3 */}
      <div className="container mt-5 text-center">
        <h2 className="fw-bold">Best Selling</h2>
        <p className="lead">Unmatched design—superior performance and customer satisfaction in one.</p>
      </div>
   
      <div className="container my-5">
        <div className="row g-4">


          {/* Product 1 */}
                 <div className="col-12 col-sm-6 col-md-4 col-lg-3">
  <div className="card border-0 text-center h-100" style={{ maxWidth: "300px", margin: "0 auto" }}>
    <img
      src="./Images/img8.png"
      alt="High neck jumper"
      className="img-fluid rounded-2 mx-auto d-block"
      style={{ maxHeight: "350px", width: "100%", objectFit: "cover" }}
    />
    <h6 className="card-title mt-3 fs-6 fw-bold">High neck jumper</h6>

              {/* Stars */}
              <div className="d-flex justify-content-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="35px"
                      width="35px"
                      viewBox="0 -960 960 960"
                      fill="#F19E39"
                    >
                      <path d="m384-334 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122Z" />
                    </svg>
                  </span>
                ))}
              </div>

              <p className="fw-bold mt-2">$250.00</p>

              {/* Color options */}
              <div className="d-flex justify-content-center gap-2 mt-0">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673&width=50"
                  alt="color1"
                  className="rounded-circle border"
                  style={{ width: 30, height: 30 }}
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/5_5_227d3051-829a-4ccf-8281-d96e0c31d539.webp?v=1742481673&width=50"
                  alt="color2"
                  className="rounded-circle border"
                  style={{ width: 30, height: 30 }}
                />
              </div>
            </div>
          </div>

          {/* Product 2 */}
        
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
  <div className="card border-0 text-center h-100" style={{ maxWidth: "300px", margin: "0 auto" }}>
    <img
      src="./Images/img6.png"
      alt="High neck jumper"
      className="img-fluid rounded-2 mx-auto d-block"
      style={{ maxHeight: "350px", width: "100%", objectFit: "cover" }}
    />
    <h6 className="card-title mt-3 fs-6 fw-bold">High neck jumper</h6>
              <h6 className="card-title mt-3 fs-6 fw-bold">Winter Coat</h6>

              <div className="d-flex justify-content-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="35px"
                      width="35px"
                      viewBox="0 -960 960 960"
                      fill="#F19E39"
                    >
                      <path d="m384-334 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122Z" />
                    </svg>
                  </span>
                ))}
              </div>

              <p className="fw-bold mt-2">$320.00</p>

              <div className="d-flex justify-content-center gap-2 mt-0">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/15_1.webp?v=1752397915&width=50"
                  alt="color1"
                  className="rounded-circle border"
                  style={{ width: 30, height: 30 }}
                />
                <img
                  src="	https://demo-milano.myshopify.com/cdn/shop/files/15_5_269aa495-12a9-46de-9e89-d83e379fa809.webp?v=1752397915&width=50"
                  alt="color2"
                  className="rounded-circle border"
                  style={{ width: 30, height: 30 }}
                />
              </div>
            </div>
          </div>

          {/* Product 3 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
  <div className="card border-0 text-center h-100" style={{ maxWidth: "300px", margin: "0 auto" }}>
    <img
      src="./Images/img5.png"
      alt="High neck jumper"
      className="img-fluid rounded-2 mx-auto d-block"
      style={{ maxHeight: "350px", width: "100%", objectFit: "cover" }}
    />
    <h6 className="card-title mt-3 fs-6 fw-bold">High neck jumper</h6>
              <h6 className="card-title mt-3 fs-6 fw-bold">Casual Shirt</h6>

              <div className="d-flex justify-content-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="35px"
                      width="35px"
                      viewBox="0 -960 960 960"
                      fill="#F19E39"
                    >
                      <path d="m384-334 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122Z" />
                    </svg>
                  </span>
                ))}
              </div>

              <p className="fw-bold mt-2">$180.00</p>

              <div className="d-flex justify-content-center gap-2 mt-0">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=50"
                  alt="color1"
                  className="rounded-circle border"
                  style={{ width: 30, height: 30 }}
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512&width=50"
                  alt="color1"
                  className="rounded-circle border"
                  style={{ width: 30, height: 30 }}
                />

              </div>
            </div>
          </div>

          {/* Product 4 */}
            
     <div className="col-12 col-sm-6 col-md-4 col-lg-3">
  <div className="card border-0 text-center h-100" style={{ maxWidth: "300px", margin: "0 auto" }}>
    <img
      src="./Images/img7.png"
      alt="High neck jumper"
      className="img-fluid rounded-2 mx-auto d-block"
      style={{ maxHeight: "350px", width: "100%", objectFit: "cover" }}
    />
    
              <h6 className="card-title mt-3 fs-6 fw-bold">Basic Blazer</h6>

              <div className="d-flex justify-content-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="35px"
                      width="35px"
                      viewBox="0 -960 960 960"
                      fill="#F19E39"
                    >
                      <path d="m384-334 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122Z" />
                    </svg>
                  </span>
                ))}
              </div>

              <p className="fw-bold mt-2">$225.00</p>

              <div className="d-flex justify-content-center gap-2 mt-0">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/13_1_5644aee9-7e1a-4296-baac-e448257d812c.webp?v=1742479315&width=50"
                  alt="color1"
                  className="rounded-circle border"
                  style={{ width: 30, height: 30 }}
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=1742479315&width=50"
                  alt="color2"
                  className="rounded-circle border"
                  style={{ width: 30, height: 30 }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>


        </div>
    )
}

export default Section3