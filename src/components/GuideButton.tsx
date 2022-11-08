import { faBook } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function GuideButton() {
  return (
    <Link className="my-link" to={"/guide"}>
      <button style={{ fontSize: ".8em" }} className="my-btn nes-btn">
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <FontAwesomeIcon icon={faBook} />
          <p style={{ margin: "0px", marginLeft: "5px" }}>Guide</p>
        </div>
      </button>
    </Link>
  )
}
