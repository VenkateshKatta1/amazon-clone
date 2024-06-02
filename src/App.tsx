import { useCallback } from 'react';
import HomeScreen from './components/Screens/Home';
import ProductDescription from './components/Screens/ProductDescription';
import useAppStore from './store/AppStore';
import useSearchStore from './store/SearchStore';


function App() {
  const { selectedASIN, setSelectedASIN } = useAppStore((state) => ({
    selectedASIN: state.selectedASIN,
    setSelectedASIN: state.setSelectedASIN
  }))

  const { setIsFocused } = useSearchStore((state) => ({
    setIsFocused: state.setIsFocused
  }))

  const handleOnBack = useCallback(() => {
    setSelectedASIN(null)
    setIsFocused(false);
  }, []);

  return (
    <div className='mx-10'>
      <button onClick={handleOnBack}>Back</button>
      {selectedASIN ? <ProductDescription /> : <HomeScreen />}
    </div>
  )
}

export default App
