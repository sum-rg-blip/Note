function Form({close}){
  return <div id="bg" className="bg-black bg-opacity-65 h-screen absolute w-full top-0">
   <div className="flex justify-center pt-20  ">
 
  <form className="bg-white p-3 w-[400px] h-[400px]">
  <i onClick={close} class=" text-4xl fa fa-times" aria-hidden="true"></i>
  <br/>
    <input className="w-[360px] my-3 border-2 border-black h-[40px]" type="text" placeholder="Enter Your Title"></input>
    <br/>
    <textarea className="border-2 border-black"  rows={2} cols={46}></textarea>
   <br/>
    <button className="bg-black text-white w-[350px]  h-[40px] p-1  text-3xl rounded">Save</button>
  </form>
  </div>
  </div>
}
export default Form