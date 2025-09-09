import CartWidget from "./CartWidget"

export default function NavBar(){
    return <nav>
        <h2>Carniceria</h2>
        <ul>
            <li><a href="#">Carne Vacuna</a></li>
            <li><a href="#">Cerdo</a></li>
            <li><a href="#">Pollo</a></li>
        </ul>
        {CartWidget}
    </nav>
}
