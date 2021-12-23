import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function About() {
    return (
        <Card>
            <div className="about">
                <h1>Tentang Project ini</h1>
                <p>Ini dalah Aplikasi React untuk memberikan feedback dan rating pada sebuah produk atau jasa</p>
                <version>1.0.0</version>
                <br></br>
                <Link to="/">Back to Home</Link>
               
            </div>
        </Card>
    )
}

export default About
