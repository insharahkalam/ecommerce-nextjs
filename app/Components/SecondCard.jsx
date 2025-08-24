import Link from "next/link";

function SecondCard(props) {
    return (
        <div>
            {/* Card 1 */}
            <div className="text-center">

                <Link className="text-decoration-none text-black" href="./Products">
                    <img
                        src={props.img}
                        alt="Product 1"
                        className="mx-auto rounded-2xl w-full max-w-[250px]"
                        />
                </Link>
                <h6 className="mt-3 fs-6 fw-bold">{props.Cloth}</h6>
                <div>{props.stars}</div>
                <h6 className="fs-6 fw-bold">{props.price}</h6>
                <div>{props.colorOption}</div>
                       
            </div>
        </div>

    )
}

export default SecondCard