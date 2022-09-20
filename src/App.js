import { Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage'
import NewPost from './components/NewPost'
import ViewPost from './components/ViewPost'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/new" element={<NewPost />} />
      <Route path="/posts/:postId" element={<ViewPost />} />
    </Routes>
  );
}


