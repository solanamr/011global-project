

const DetailStock = ({ detail }) =>{
    return(
        <div className="flex justify-center pt-3 pb-10">
            
            <table className="border-collapse border-2 border-blue w-3/6">
            <thead className="text-center bg-dark">
            <tr>
            <th className="px-5 py-3 text-white2 bg-blue4 ">STOCKS</th>
            <th className="px-5 py-3 text-white2 bg-blue4">PRICES</th>
          </tr>
          </thead>
            <tbody>
                {
                    detail.map((s, i)=>{
                        return(
                            <tr key={i}>
                                <td className="text-center border-2 border-blue py-2">{s.Tikcer}</td>
                                <td className="text-center border-2 border-blue">{s.Price}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            
        </div>
    )
}

export default DetailStock;