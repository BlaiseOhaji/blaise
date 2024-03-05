

const About = ()=>{
    return(
    <section id="about">
     <div className="mx-auto px-8 text-white mt-16">
        <div className="flex items-center flex-col py-5">
            <span className="w-[2.5rem] h-[4px] bg-gradient-to-r from-indigo to-pink rounded-full"></span>
            <h2 className="text-lg font-bold">About Project</h2>
        </div>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
        <div className="md:w-1/2 flex flex-col space-y-5 md:px-4">
           <p className="text-sm">Welcome to our state-of-the-art Commodity Management System, where businesses are empowered to revolutionize their approach to handling commodities with unparalleled efficiency and precision. Our comprehensive solution operates seamlessly through four key pillars, providing a robust foundation for optimizing every aspect of commodity management. Our system operates seamlessly through four key pillars:</p>
           <div className="flex space-x-3 items-center ">
            <div className="w-[2rem] h-[2rem] rounded-[50%] border border-white flex items-center justify-center">1</div>
            <p className="font-semibold text-md">Efficient Tracking</p>
           </div>
           <div className="flex space-x-3 items-center ">
            <div className="w-[2rem] h-[2rem] rounded-[50%] border border-white flex items-center justify-center">2</div>
            <p className="font-semibold text-md">Optimized Procurement</p>
           </div>
           <div className="flex space-x-3 items-center ">
            <div className="w-[2rem] h-[2rem] rounded-[50%] border border-white flex items-center justify-center">3</div>
            <p className="font-semibold text-md">Dynamic Pricing</p>
           </div>
           <div className="flex space-x-3 items-center ">
            <div className="w-[2rem] h-[2rem] rounded-[50%] border border-white flex items-center justify-center">4</div>
            <p className="font-semibold text-md">Compliance Management</p>
           </div>
           <p className="text-sm">Experience the full potential of our system and discover a new era of operational excellence, where real-time insights and dynamic strategies propel your business forward with confidence and agility.</p>
        </div>
        <div className="md:w-1/2 flex flex-col space-y-3">
         <div className="flex space-x-5">
          <div className="bg-transaparent w-1/2 h-[12rem] rounded-lg shadow-xl justify-center items-center flex flex-col">
<div className="w-[3rem] h-[3rem] rounded-full bg-white flex justify-center items-center">
    <i className="fas fa-atom text-black text-lg"></i>
</div>
<h2 className="text-center">Highly Efficient</h2>
          </div>
          <div className="bg-transaparent w-1/2 h-[12rem] rounded-lg shadow-xl justify-center items-center flex flex-col mt-10">
          <div className="w-[3rem] h-[3rem] rounded-full bg-white flex justify-center items-center">
    <i className="fas fa-cog text-black text-lg"></i>
</div>
<h2 className="text-center">Fully Optimized</h2>
          </div>
         </div>
         <div className="flex space-x-5">
          <div className="bg-transaparent w-1/2 h-[12rem] rounded-lg shadow-xl justify-center items-center flex flex-col -mt-5">
<div className="w-[3rem] h-[3rem] rounded-full bg-white flex justify-center items-center">
    <i className="fas fa-money-bill text-black text-lg"></i>
</div>
<h2 className="text-center">Dynamic Pricing</h2>
          </div>
          <div className="bg-transaparent w-1/2 h-[12rem] rounded-lg shadow-xl justify-center items-center flex flex-col mt-5">
          <div className="w-[3rem] h-[3rem] rounded-full bg-white flex justify-center items-center">
    <i className="fas fa-book text-black text-lg"></i>
</div>
<h2 className="text-center">Compliance Management</h2>
          </div>
         </div>
        </div>
        </div>
     </div>
    </section>
    )
}

export default About