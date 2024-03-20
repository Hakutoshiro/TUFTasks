import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from 'axios'
import { Navigate } from "react-router-dom";


export default function FormPage() {
    const [codeLang, setCodeLang] = useState('--Select Code Language--');
    const [codeLangDiv, setCodeLangDiv] = useState(false);
    const [username, setUsername] = useState('');
    const [stdIn,setStdIn] = useState('');
    let [sourceCode,setSourceCode] = useState ('');
    const [cData,setCData] = useState('')

    const handleSourceCode = (ev) =>{
        setSourceCode(ev);
    }

    const handleVisibility = (ev) => {
        ev.preventDefault();
        setCodeLangDiv(!codeLangDiv)
    }
    const handleLangChange = (lang) => {
        setCodeLang(lang);
        setCodeLangDiv(false);
    }

    const handleSubmitBtn = async(ev) =>{
        ev.preventDefault();
        if(codeLang=== '--Select Code Language--'|| !username || !stdIn || !sourceCode){
            window.alert("Please enter all fields.")
            return ;
        }
        const {data} = await axios.post('/addCode', {username,codeLang,stdIn,sourceCode})
        setSourceCode('');
        setCodeLang('--Select Code Language--');
        setStdIn('');
        setUsername('');
        setCData(data); 
    }
    if(cData==="success"){
            return (<Navigate to={'/submissions'}/>)
    }

    return (
        <>
            <Navbar page="Form" />
            <div className="h-auto  w-3/6 mx-auto text-center pt-20  font-mono">
                <form className="" onSubmit={handleSubmitBtn}>
                    <h1 className="text-4xl border-b-2 py-2 ">Add Your Code Here:</h1>
                    <h2 className="text-start mt-4 mb-2"  >Username:</h2>
                    <input type="text" className="border-2 w-full py-2 px-4 rounded-xl" value={username} placeholder="John Doe" onChange={ev =>setUsername(ev.target.value)}/>
                    <h2 className="text-start mt-2 mb-2">Preffered code Language:</h2>
                    <button value="" className="border-2 w-full py-2 rounded-xl" onClick={handleVisibility}>{codeLang}</button>
                    {codeLangDiv && (
                        <div className="w-full flex justify-center pt-5 " >
                            <ul className="flex flex-col items-start">
                                <li>
                                    <input type="radio" name="codeLanguage" id="codeLanguage1"
                                        value={codeLang}
                                        onClick={ev => handleLangChange('Python')} />
                                    <label htmlFor="codeLanguage1"> Python</label>
                                </li>
                                <li>
                                    <input type="radio" name="codeLanguage" id="codeLanguage2"
                                        value={codeLang}
                                        onClick={ev => handleLangChange('C++')} />
                                    <label htmlFor="codeLanguage2"> C++</label>
                                </li>
                                <li>
                                    <input type="radio" name="codeLanguage" id="codeLanguage3"
                                        value={codeLang}
                                        onClick={ev => handleLangChange('Java')} />
                                    <label htmlFor="codeLanguage3"> Java</label>
                                </li>
                                <li>
                                    <input type="radio" name="codeLanguage" id="codeLanguage4"
                                        value={codeLang}
                                        onClick={ev => handleLangChange('JavaScript')} />
                                    <label htmlFor="codeLanguage4"> JavaScript</label>
                                </li>
                            </ul>
                        </div>
                    )}
                    <h2 className="text-start mt-2 mb-2" >Standard Input:</h2>
                    <textarea className="block p-2.5 w-full h-32 text-sm  rounded-xl border-2 resize-none"  value={stdIn}  onChange={ev=>setStdIn(ev.target.value)}></textarea>
                    <h2 className="text-start mt-2 mb-2" >Source Code:</h2>
                    <textarea className="block p-2.5 w-full h-96 text-sm  rounded-xl border-2 resize-none" value={sourceCode} onChange={(ev)=>handleSourceCode(ev.target.value)}></textarea>
                    <button className="border-2 w-full py-2 my-5 rounded-xl hover:bg-gray-500 hover:text-white hover:border-0">Submit</button>
                </form>
            </div>
        </>
    )
}