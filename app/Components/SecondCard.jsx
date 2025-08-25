function SecondCard(props) {
    return (
        <div>
            {/* Card 1 */}
            <div className="text-center">
                <div className="card border-0 rounded-3" style={{ width: "13rem", height: '20rem', gap: "10px" }} >
                 
                        <img
                            src={props.img}
                            alt="Product 1"
                            className="rounded-3" style={{ width: "17rem", height: '17rem' }}
                        />

                    <h6 className="mt-1 fs-6 fw-bold">{props.Cloth}</h6>
                    <div>{props.stars}</div>
                    <h6 className="fs-6 fw-bold">{props.price}</h6>
                    <div>{props.colorOption}</div>

                </div>
            </div>
            </div>

            )
}

            export default SecondCard