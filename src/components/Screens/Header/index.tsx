import SearchBar from '../../SearchBar'
import { useCallback } from 'react';
import useSearchStore from '../../../store/SearchStore';
import useAppStore from '../../../store/AppStore';


function Header() {
  const { setSelectedASIN } = useAppStore((state) => ({
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
    <div className='flex items-center my-5'>
      <button className='pr-2' onClick={handleOnBack}>Back</button>
      <SearchBar />
    </div>
  )
}

export default Header