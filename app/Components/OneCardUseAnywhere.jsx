import Link from "next/link";
function OneCardUseAnywhere(props) {
    return (
        <div>

            {/* Card 1 */}
            
            <div className="text-center ">
                 <Link className="text-decoration-none text-black" href={`/OpenEachProduct?id=${props.id}`}>
                <div className="card mx-auto border-0 rounded-3" style={{ width: "17rem", height: '25rem', gap: "10px" }} >
                    <img
                        src={props.img}
                        alt="Product 1"
                        className="rounded-top-3" style={{ width: "17rem", height: '17rem' }}
                    />
                    <div className="card-body pt-0 pb-1">
                        <p className=" mb-1 product text-center">{props.Cloth}</p>
                        <h6 className="fs-6 text-center">{props.price}</h6>
                        <div className="d-flex align-items-center justify-content-center">
                            <span className="product d-flex align-items-center">{props.sold} | {props.stars}</span>
                        </div>
                    </div>
                </div>
                </Link>
            </div>

        </div>

    )
}

export default OneCardUseAnywhere