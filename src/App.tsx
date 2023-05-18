import Button from 'components/button/Button.tsx'
import SideBar from 'components/SideBar'
import List from 'components/List'
import Profile from 'components/Profile'
import Header from 'components/Header'
import './App.scss'  




function App() {
  

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
        <Profile/>
        <SideBar/>
        </div>
        <main>
          <Header/>
          <div className='main-bottom'>
            <List/>
            <List/>
            <List/>
          </div>
        </main>
        
      </div>
    </>
  )
}

export default App
