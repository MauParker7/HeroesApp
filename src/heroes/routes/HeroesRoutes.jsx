
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DCPage, MarvelPage, SearchPage, HeroPage } from '../pages'


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container'>

        <Routes>
                <Route path="Marvel" element={<MarvelPage/>} />
                <Route path="DC" element={<DCPage/>} />

                <Route path="Search" element={<SearchPage/>} />
                <Route path="Hero/:id" element={<HeroPage/>} />

                <Route path="/" element={<Navigate to={"/Marvel"}/>} />
        </Routes>       

        </div>
    </>
    
    
  )
}
