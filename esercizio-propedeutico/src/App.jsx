import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div>
        <Card
        title = "Tokyo"
        imgURL = "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description = "Tokyo si trova in Giappone">
        </Card>
        <Card
        title = "Roma"
        imgURL = "https://plus.unsplash.com/premium_photo-1661964123160-8d049fa07f0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description = "Roma si trova in Italia">
        </Card>
        <Card
        title = "New York"
        imgURL = "https://plus.unsplash.com/premium_photo-1682048358672-1c5c6c9ed2ae?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description = "New York si trova negli Stati Uniti">
        </Card>
        <Card
        title = "Paris"
        imgURL = "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description = "Parigi si trova in Francia">
        </Card>


      </div>
    </>
  );
}

export default App;
