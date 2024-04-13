import logo from './logo.svg';
import './App.css';
import IDCard from './components/IDCards';
// import Data from './Data.json'; // make sure you manually input it here since its not a js file

// this is where I am doing a mock recipe website
function App() {
  return (
    <div className="App justify-content-center"> 
      <h1> Welcome to my Recipe Book</h1>

      {/* formatting the cards so it is centered! */}
      <div className = 'd-flex container justify-content-sm-center'> {/* holds all the cards*/}
        <section className="row row-cols-sm-2
        row-cols-lg-3"> {/* max of 2 columns per row at small viewport, 3 cols at lg viewport*/}
        <section className="col">
          <IDCard iname="The Everyday Salad" iimage = {"ccs.jpg"} idesc = "Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients." 
          />
        </section>
        <section className="col">
          <IDCard iname="Classic Korean Bibimbap" iimage = {"simplebibimbap.jpeg"} idesc = "A combination of the korean words for mixing (bibim) and rice (bap), bibimbap calls for combining rice with an assortment of vegetables."/>
        </section>
        <section className="col">
          <IDCard iname="Creamy Tomato Pasta" iimage = {"creamy.jpg"} idesc = "A simple and delicious meal made from scratch with a cream and tomato based sauce that is rich and silky smooth. "/>
        </section>
        </section>
      </div>
      <div className="d-flex container justify-content-center">
        {/* same thing here, small viewport shows 2 columns per row, lg viewport shows 3 columns per row */}
        <section className="row 
        row-cols-sm-2 
        row-cols-lg-3"> 
         <section className="col"> {/*shows up as 3 columns since there can a max of 12 in a view port */}
          <IDCard iname="Easy Tofu Pudding" iimage = {"tofuPudding.jpg"} idesc = "Tofu pudding is a delicious Asian dessert made from soy milk. The pudding is often made using a coagulant, usually GDL. to congeal the soy milk." 
          />
          </section>
          <section className="col">
            <IDCard iname="Matcha Souffle Pancakes" iimage = {"souffle.jpg"} idesc = "They're super airy and fluffy like you're eating cottony clouds with a special touch of Japanese flavor! "/>
          </section>
          <section className="col">
            <IDCard iname="Japanese Fruit Sandwich" iimage = {"fruitsandwich.jpg"} idesc = "For these sweet sandwiches, we embed juicy seasonal resh fruit in chilled whipped cream between 2 slices of pillowy Japanese milk bread." />
          </section>
        </section>
      </div>
      </div>

      // used for Data.json files!!
      // Data.data.map((elem) => {
      //   return <IDCards iname={elem.name}/>
      // })
  );
}

export default App;
