// import logo from './logo.svg';
// import './App.css';
import './main.css';


// const estilo = ({bg = '#222'}) => ({
//   background: bg,
//   color: '#fff',
//   padding: '10px 15px',
//   margin: '10px 15px'
// })

// const estilo2 = {
//   boxShadow: '0 5px 3px rgba(0, 0, 0, 0.5)'
// }

const Li = ({ children }) => {
  return (
    <li className='clase-li'>{children}</li>
  )
}

const App = () => {
  // const valor = 'triste'
  return (
   <ul className="clase-css">
    <Li estado='feli'>valor de li</Li>
   </ul>
  );
}

export default App;
