import Header from "./components/header";
import Advertisement from "./components/advertisement";
import Container from "./components/container";
import Footer from "./components/footer";
import UserLogin from "./components/user_login";
import Newsletter from "./components/newsletter";

function App() {
  return (
    <div className="App">
      <Header />
      <Advertisement />
      {/* <hr /> */}
      <Container />
      <hr />
      <UserLogin />
      <hr />
      <Newsletter />
      <hr />
      <Footer />
      <hr />
    </div>
  );
}

export default App;
