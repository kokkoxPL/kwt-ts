import { Link } from "react-router-dom"

function FormSubmitted() {
  return <div style={{ textAlign: "center" }}>
    <h1>Thank you 🥨</h1>
    <Link to="/join">Apply again 🧃</Link>
  </div>
}

export default FormSubmitted