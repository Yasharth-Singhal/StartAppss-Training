import './App.css'

function App() {
  return <>
      <div className='container'>
        {
          products.map(({id}) => 
              <div className="product-card">
                  <img src={image} alt="Iphone" />
                  <h2>{title}</h2>
                  <h3>{price}</h3>
              </div>
      )}
     </div> 
    </>
  
}

    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const products = data;
      console.log(products);
    });

    App(id, image,title,price);

export default App;
