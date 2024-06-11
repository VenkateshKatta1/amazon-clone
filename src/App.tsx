import HomeScreen from './components/Screens/Home';
import ProductDescription from './components/Screens/ProductDescription';
import useAppStore from './store/AppStore';
import Header from './components/Screens/Header';

function App() {
  const { selectedASIN, } = useAppStore((state) => ({
    selectedASIN: state.selectedASIN,
  }))

  return (
    <div className='mx-10'>
      <Header />
      {selectedASIN ? <ProductDescription /> : <HomeScreen />}
    </div>
  )
}

export default App
