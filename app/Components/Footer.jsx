function Footer(){

    return(
        <div>
             {/*Footer*/}

      <div className="container-fluid bg-light marginIssue ">
        <footer className="container  text-dark mt-5 pt-5 pb-4">

          <div className="row ">

            {/* Left - Logo + Info */}
            <div className="col-md-3 mb-4">
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/logo.png?v=1742650856&width=165"
                alt="Logo"
                width={100}
                height={50}
              />
              <p className="text-muted mt-3">
                We only carry designs we believe in ethically and aesthetically – original, authentic pieces that are made to last.
                <a href="#" className="text-dark fw-semibold"> Learn more</a>
              </p>

              <span className="mb-1 d-flex"><i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg></i> Street Address 2571 Oakridge</span>
              <span className="mb-1 d-flex"><i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg></i> +1 (973) 435–3638</span>
              <span className="mb-0 d-flex"><i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg></i> info@fashionwomen.com</span>
            </div>


            {/* Our Company */}
            <div className="col-md-2 mb-4">
              <h5 className="fw-bold">Our Company</h5>
              <ul className="list-unstyled mt-3" style={{ lineHeight: 2 }}>
                <li><a href="#" className="text-muted text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Our Store</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Store Location</a></li>
                <li><a href="#" className="text-muted text-decoration-none">FAQ</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 mb-4">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled lh-5 mt-3" style={{ lineHeight: 2 }}>
                <li><a href="#" className="text-muted text-decoration-none">Privacy Policy</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Terms & Conditions</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Sale</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Size Guide</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Wishlist</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Compare</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-md-5">
              <h5 className="fw-bold">Sign Up to Newsletter</h5>
              <p className="text-muted mt-3">Subscribe for store updates and discounts.</p>
              <div className="d-flex mb-2">
                <input type="email" className="form-control w-50 me-2 px-3 py-2 rounded-5 " placeholder="Enter your email..." />
                <button className="btn btn-dark rounded-5 py-2 px-5">Sign Up</button>
              </div>
              <small className="text-muted">
                ***By entering the e-mail you accept the <span className="fw-semibold">terms and <br /> conditions</span>
                and the <span className="fw-semibold">privacy policy</span>.
              </small>
              <div className="mt-3 d-flex gap-1">
                <img width={15} height={20} src="https://cdn-icons-png.flaticon.com/512/59/59439.png" className="bi bi-facebook" />
                <img width={20} height={20} src="https://static.vecteezy.com/system/resources/previews/008/385/736/non_2x/instagram-social-media-icon-symbol-element-illustration-free-vector.jpg" className="bi bi-instagram" />
                <img width={20} height={20} src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png" className="bi bi-youtube" />
                <img width={30} height={30} src="https://pixsector.com/cache/49b7652e/av13549cd7448f862fb51.png" className="bi bi-pintrest" />
                <img width={25} height={15} src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png" className="bi bi-tiktok" />

              </div>
            </div>
          </div>

          <hr />

          {/* Bottom Row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="mb-0">🇺🇸 United States (USD $)</p>
            <p className="mb-0">© 2025 Milano store. All rights reserved.</p>
            <div className="d-flex gap-2">
              <img width={20} src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" height="25" alt="Visa" />
              <img width={20} src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" height="25" alt="Mastercard" />
              <img width={20} src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" height="25" alt="Amex" />

            </div>
          </div>

        </footer>
      </div>

        </div>
    )
}


export default Footer