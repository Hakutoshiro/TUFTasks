import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

export default function SubmissionsPage() {

    const [tableData, setTableData] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const getAllSubmissions = async () => {
        const { data } = await axios.get('/readDBTable');
        setTableData(data);
        setShowTable(true);
    }

    useEffect(() => {
        getAllSubmissions();
    },[])
    return (
        <>
            <Navbar page="Submissions" />
            <div className="w-full pt-20">
                {showTable && (
                    <table className="w-full ">
                        <thead>
                            <tr className='bg-gray-500 text-white'>
                                <th className=' w-1/12 border-x-2'>Username</th>
                                <th className='w-1/12 border-x-2'>Language</th>
                                <th className='w-1/12 border-x-2'>StdIn</th>
                                <th className='w-5/12 border-x-2'>SourceCode</th>
                                <th className="w-1/6 border-x-2">StdOut</th>
                                <th className='w-1/4 border-x-2'>Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData?.map((data,index)=>{
                                return (
                                    <tr key={index} className=' text-center border-b-2'>
                                        <td className='w-1/12 border-x-2 border-black'>{data.username}</td>
                                        <td className='w-1/12 border-x-2 border-black'>{data.prefLang}</td>
                                        <td className='w-1/12 border-x-2 border-black'>{data.stdIn}</td>
                                        <td className='w-5/12 text-start px-4 py-2 border-x-2 border-black whitespace-break-spaces'>{data.sourceCode}</td>
                                        <td className="w-1/6 border-x-2 border-black">{' '}</td>
                                        <td className='w-1/4 border-x-2 border-black'>{data.timestamp}</td>
                                    </tr>
                                )
                            })

                            }
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}