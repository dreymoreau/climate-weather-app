import Header from '../components/Header'
import Today from '../components/Today'
import NextDays from '../components/NextDays'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div className="App bg-dark flex flex-col items-center">
        <Header />
        <Today />
        <NextDays />
        <Footer />
      </div>
    </>
  );
}

export default Home;