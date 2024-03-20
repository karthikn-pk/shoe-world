import Buttons from "../components/Buttons";
function Recommended({handleClick}) {
  return (
    <>
     <div >
        <h2 className='ml-80 p-4'>Recommended</h2>
        <div className='flex ml-80 p-4 '>
        <Buttons onClickHandler={handleClick} value="" title="All Products"/>

            <Buttons onClickHandler={handleClick} value="Nike" title="Nike"/>
            <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas"/>
            <Buttons onClickHandler={handleClick} value="Puma" title="Puma"/>

            <Buttons onClickHandler={handleClick} value="Vans" title="Vans"/>

        </div>
    </div>
    </>
   
  )
}
export default Recommended;
