
export interface paginationControlsProps{
      page: number,
      totalPages: number,
      setPage: (page: number) => void;

}


export default function PaginationControls({page, totalPages, setPage}: paginationControlsProps){
      return (
            <div className='flex flex-row gap-2 items-center justify-center mt-6'>
                  {/* Previous Button DOCS: disabled + conditional renderering  */}
                  <button 
                        className={`px-4 py-2 rounded-lg transition-colors ${
                              page === 0 
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                        onClick={() => setPage(Math.max(0, page - 1))}
                        disabled={page === 0} 
                  >
                        Previous
                  </button>
                  
                  {/* Page Numbers  DOCS: array creation */}
                  <div className='flex gap-1'>
                        {[...Array(totalPages)].map((_, i) => (
                              <button
                                    key={i}
                                    className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                                          page === i ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                    onClick={() => setPage(i)}
                              >
                                    {i + 1}
                              </button>
                        ))}
                  </div>
                  
                  {/* Next Button */}
                  <button 
                        className={`px-4 py-2 rounded-lg transition-colors ${
                              page === totalPages - 1 
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                        onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                        disabled={page === totalPages - 1}
                  >
                        Next
                  </button>
            </div>
      )
}