import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pagedex from './Pagedex';
import PkInfo from './Pages/PkInfo';

export default function AppRouter() {
    return(
      <Router>
          <Routes>
              <Route path='/' element={<Pagedex/>} />
              <Route path='/PkInfo' element={<PkInfo/>}/>
          </Routes>
      </Router>
    );
}