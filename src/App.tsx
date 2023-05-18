import Button from 'components/button/Button.tsx'
import Search from 'components/Search'
import List from 'components/List'
import Profile from 'components/Profile'
import './App.scss'  




function App() {
  

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
        <Profile/>
        <Search/>
        </div>
        <main>
          <div className='main-top'>
          <h1>this is top</h1>
          </div>
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
