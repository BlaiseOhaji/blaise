

const Footer = ()=>{
    return (
        <footer className="bg-black">
        <div className="flex flex-col items-center justify-between px-6 py-10 mx-auto">
        <div className="flex space-x-12 text-white">
                    <a href="#" className="hover:text-brightRed">Home</a>
                    <a href="#" className="hover:text-brightRed">Apply</a>
                    <a href="#" className="hover:text-brightRed">Signin</a>
                </div>
                <p className="mx-auto my-2 text-center text-white">  Copyright &copy; 2024, All Rights Reserved.</p>
        </div>
    </footer>
    )
}
export default Footer