import './App.css';


function App(props) {
  // code here
  const ImgData = props.data
  return(
    <div>
      <div><h1>Kalvium gallary</h1></div>
      <div>{ImgData.map((item) => {
      return <img key={item.id} src={item.img} alt="" />
      })}
      </div>
   </div>
  )
}

export default App;
