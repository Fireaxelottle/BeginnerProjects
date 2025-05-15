

const Search = ({search, setSearch, number, setNumber}) => {
    

  return (
     <div className=' gap-4 p-4'>
        <label className='text-xl text-slate-400'>Search Here:</label>
            <input  type="text" className='border-2 border-slate-300 p-1 w-full' onChange={(e) => setSearch(e.target.value)}/>
        <label className='text-xl text-slate-400 '>Number of images:</label>
        <br />
            <select defaultValue={number} name="" id="number" className='bg-slate-300 p-1 w-24' onChange={(e) => setNumber(e.target.value) }>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option  value="15">15</option>
            </select>
    </div>
    
    
  )
}

export default Search
