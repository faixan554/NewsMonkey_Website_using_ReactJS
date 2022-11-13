import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


const App = ()=>{

  const apikey=process.env.REACT_APP_NEWS_APIKEY

    return (
      <div>
        <Router>
          <Navbar/>
            <Routes>
                <Route exact path="/" element={<News apikey={apikey} key="general" pageSize={9} country={'us'} category={'general'} />}></Route>
                <Route exact path="/business" element={<News apikey={apikey}  key="business" pageSize={9} country={'us'} category={'business'} />}></Route>
                <Route exact path="/sports" element={<News apikey={apikey}  key="sports" pageSize={9} country={'us'} category={'sports'} />}></Route>
                <Route exact path="/entertainment" element={<News apikey={apikey}  key="entertainment" pageSize={9} country={'us'} category={'entertainment'} />}></Route>
                <Route exact path="/health" element={<News apikey={apikey}  key="health" pageSize={9} country={'us'} category={'health'} />}></Route>
                <Route exact path="/science" element={<News apikey={apikey}  key="science" pageSize={9} country={'us'} category={'science'} />}></Route>
                <Route exact path="/technology" element={<News apikey={apikey}  key="technology" pageSize={9} country={'us'} category={'technology'} />}></Route>
            </Routes>
          <Footer/>  
        </Router> 
      </div>
    )
  } 



export default App;