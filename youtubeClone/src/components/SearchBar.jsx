

function SearchBar() {


    return <div className="grid grid-cols-12 gap-2 border border-gray-600 rounded-3xl px-1 ml-1 max-sm:hidden block">
        <input 
        type="text"
        placeholder="search"
        className="col-span-9 h-8 border rounded-xl border-none pl-3 focus:outline-none"
        />
        <span className="col-span-1"/>
        <button className="col-span-2 p-0 m-0 inline-flex items-center">
        <svg class="feather feather-search" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
        </button>
    </div>

}

export default SearchBar;