import "./App.css"
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImageSearch from "./api";
function App()
{
    return(
        <div className="container">
            <div>
                <h1>Поиск изображений</h1>
                <ImageSearch/>
            </div>
        </div>
    )
}

export default App