function Section4(){
    return(
        <div>

   {/* Section 4 */}

      <div className="container my-5">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
              <img
                src="./Images/img9.png"
                alt="Product 1"
                className="rounded-4 abc img-fluid w-100"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="text-center mt-2 p-2">
                <p className="mt-3 myText">DAYTIME STAPLES</p>
                <h4 className="mt-0">Cool & Confident</h4>
                <p className="text-secondary">
                  Crisp whites and sharp shades for your everyday power look.
                </p>
                <a className="text-black fw-bold" href="#">
                  Shop Collection
                </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
              <img
                src="./Images/img10.png"
                alt="Product 2"
                className="rounded-4 abc img-fluid w-100"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="text-center mt-2 p-2">
                <p className="mt-3 myText">BOLD ESSENTIALS</p>
                <h4 className="mt-0">Golden Layers</h4>
                <p className="text-secondary">
                  Soft knits in rich tones—effortlessly stylish, endlessly wearable.
                </p>
                <a className="text-black fw-bold" href="#">
                  Shop Collection
                </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
              <img
                src="./Images/img11.png"
                alt="Product 3"
                className="rounded-4 abc img-fluid w-100"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="text-center mt-2 p-2">
                <p className="mt-3 myText">SAVE 10—30% ON STATEMENT PIECES</p>
                <h4 className="mt-0">Modern Ease Unfolded</h4>
                <p className="text-secondary">
                  Effortless looks for every moment—from poolside to city strolls.
                </p>
                <a className="text-black fw-bold" href="#">
                  Shop Collection
                </a>
            </div>
          </div>
        </div>
      </div>

        </div>
    )
}

export default Section4