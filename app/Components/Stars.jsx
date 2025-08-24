function Stars(){
    return(
        <div>

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

        </div>
    )
}

export default Stars