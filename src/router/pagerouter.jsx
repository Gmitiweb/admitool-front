import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBarHeader from '../layouts/navbar';
import Login from '../pages/login';
import { UserProvider } from '../context/UserContext.jsx';
import Register from '../pages/register.jsx';
import Menu from '../pages/menuprincipal';
import Carrera from '../pages/carreras2';
import Faspirante from '../pages/faspirante'
import WelcomeContent from '../components/WelcomeContent'
import Postulacion from '../pages/postulacion';
import Logoutbutton from '../components/logout.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Inscription from '../components/inscripcionDownload.jsx';
import Aceptacion from '../pages/aceptacion.jsx';
import RecoverPassword from '../pages/recuperarcuenta.jsx';
import MenuAdmin from '../pages/admin/menuAdmin.jsx';
import AdminAreaLista from '../pages/admin/area/lista.jsx';
import AdminAreaCrear from '../pages/admin/area/create.jsx'
import AdminPeriodos from '../pages/admin/periodo/listaperiodo.jsx'
import AdminPeriodosCarreras from '../pages/admin/periodo/listaperiodoCarrera.jsx'
import AdminProgramas from '../pages/admin/programa/listaprograma.jsx'
import AdminMaterias from '../pages/admin/materias/listamaterias.jsx'
import AdminCursos from '../pages/admin/cursos/listacursos.jsx'
import AdminAsignacion from '../pages/admin/asignacion/asignacion.jsx'
const Pagerouter = () =>{
    return (
       <div className='container'>
        <BrowserRouter future={{ v7_startTransition: true }}>
         <NavBarHeader /> 
            <Routes>
                <Route path='/' element={ <WelcomeContent /> }/>
                    
                    <Route path='login' element={ <Login /> } /> 
                    <Route path='register' element={ <Register/> } /> 
                    <Route path='RecoverPassword' element={ <RecoverPassword/> } /> 
                    
                    <Route element={<ProtectedRoute allowedRoles={["/menu"]} />}>
                        <Route path='menu' element={ <UserProvider><Menu/></UserProvider>} /> 
                    </Route>
                    <Route element={<ProtectedRoute allowedRoles={["/inscripcion"]} />}>
                        <Route path='inscripcion' element={<Carrera/>} /> 
                    </Route>
                    <Route element={<ProtectedRoute allowedRoles={["/faspirante"]} />}>
                        <Route path='faspirante' element={<UserProvider><Faspirante/></UserProvider>} />
                    </Route>
                    <Route element={<ProtectedRoute allowedRoles={["/inscripcionend"]} />}>
                        <Route path='inscripcionend' element={<Inscription/>} />
                    </Route>
                    <Route element={<ProtectedRoute allowedRoles={["/postulacion"]} />}>
                        <Route path='postulacion' element={<UserProvider><Postulacion/></UserProvider>} />
                    </Route>
                    <Route element={<ProtectedRoute allowedRoles={["/aceptacion"]} />}>
                        <Route path='aceptacion' element={<UserProvider><Aceptacion/></UserProvider>} />
                    </Route>
                    <Route element={<ProtectedRoute allowedRoles={["/menuadmin"]} />}>
                        <Route path='menuadmin' element={<MenuAdmin/>} />
                        <Route path='AdminProgramas' element={<AdminProgramas/>} />
                        <Route path='AdminAreaLista' element={ <AdminAreaLista /> } />
                        <Route path='AdminAreaCrear' element={ <AdminAreaCrear /> } />
                        <Route path='AdminPeriodos' element={ <AdminPeriodos /> } />
                        <Route path='AdminPeriodosCarreras' element={ <AdminPeriodosCarreras /> } />
                        <Route path='AdminMaterias' element={ <AdminMaterias/> } />
                        <Route path='AdminCursos' element={ <AdminCursos/> } />
                        <Route path='AdminAsignacion' element={ <AdminAsignacion/> } />
                    </Route>
                                                           
                 
                    <Route path='logout' element={ <Logoutbutton /> } />
                  
                   
                    <Route path='*' element={ <Navigate replace to="/"/> }/>
                  
              
            </Routes> 
            </BrowserRouter>
       </div>
        
       
        

    )

}
export default Pagerouter