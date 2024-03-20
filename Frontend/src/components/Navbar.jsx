import { Link } from "react-router-dom"



export default function Navbar({page}){
    return(
        <>
            <nav className="w-full ">
                <div className="w-full flex justify-between items-center p-5 border-b-2 font-mono fixed bg-white">
                    <div className="text-2xl font-bold cursor-default">Task</div>
                    <div className="flex w-52 justify-between">
                        <Link to={'/'} className={page==="Form" ? "font-bold text-blue-800":"hover:text-blue-700"}>Submit-Code</Link>
                        <Link to={'/submissions'} className={page==="Submissions" ? "font-bold text-blue-800":"hover:text-blue-700"}>Submissions</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}