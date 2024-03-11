import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';


function RouteApp() {
    return (
        <BrowserRouter >
            <Routes>


                <Route path="/login" element={<Login />} />

            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp