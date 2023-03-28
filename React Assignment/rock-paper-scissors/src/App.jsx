import paper from './paper.png';
import scissors from './scissors.png';

function App() {

  return (
    <>
      <h1 className='text-3xl w-max my-2 mx-auto font-semibold'>Grid</h1>
      <div className='h-screen grid grid-cols-2 gap-2 px-2 py-1'>
        <div className='bg-black h-full col-span-2 row-span-2'></div>
        <div className='bg-red-600 h-full row-span-2'></div>
        <div className='bg-blue-600 h-full'></div>
        <div className='bg-yellow-600 h-full'></div>
      </div>
      <h2 className='text-3xl w-max my-2 mx-auto font-semibold'>Flexbox</h2>
      <div className='flex'>
        <div className='bg-blue-500 text-white p-1 order-4'>Item 1</div>
        <div className='bg-black text-white p-1 grow'>Item 2</div>
        <div className='bg-green-500 text-white p-1 grow'>Item 3</div>
        <div className='bg-red-500 text-white p-1 order-first shrink'>Item 4</div>
        
      </div>
    </>
  )
}

export default App
