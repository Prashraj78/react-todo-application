import React from 'react';
// import { createRoot } from 'react-dom';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import { Toaster } from 'react-hot-toast';



function App() {


  const style = {
    justifyContent: "center",
    textAlign: 'center',
    fontSize: '18px',
    marginTop : "15px"
  }


  return (
    <>

      <div className='container'>
        <PageTitle>Todo App</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />


        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{

          style: {
            fontSize: "1.4rem"
          }
        }} />
        <footer style={style}>
          <p>All Rights Reserved &copy; {new Date().getFullYear()} @Prashant_Patil</p>
      </footer>
    </>
  )
}
export default App;
