import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import React from 'react';
import ShelterList from 'pages/ShelterList';
import AdminLoginForm from 'pages/AdminLoginForm';
import Post from 'pages/Post';
import Welcome from 'pages/Welcome';
import PostList from 'pages/PostList';
import Shelter from 'pages/Shelter';

function App() {

  const formatDate = dateString => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const getPostType = status => {
    switch(status) {
        case 0: return 'Lost';
        case 1: return 'Found';
        default: return 'Unknown';
    }
  }

  return (
    <React.Fragment>
      <Header/>
      <main className='container'>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />

            <Route path="/shelters" element={<ShelterList />} />
            <Route path="/shelters/:shelter" element={<Shelter />} />

            <Route exact path="/posts/lost" element={<PostList postType={0}/>} />
            <Route exact path="/posts/found" element={<PostList postType={1}/>} />
            <Route path="/posts/:post" element={<Post formatDate={formatDate} getPostType={getPostType}/>} />

            <Route path="/admin" element={<AdminLoginForm />} />
              {/* <Route path="/admin/unconfirmed_posts" element={<UnconfirmedPostsList postType={getPostType} />} /> */}

          </Routes>
        </Router>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
