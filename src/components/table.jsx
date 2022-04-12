

const MyTable = ({
  columns,
  datas,
  onDelete
}) => {

  const dynamicKey = () => {
     
  }

  return(
    <>
      <table className="table">
        <thead>
            <tr>
            {
              columns?.map(column => {
                return(
                  <>
                      <th scope="col">{column}</th>
                  </>
                )
            })
        }
        </tr>
        </thead>
        <tbody>
            {
                datas?.map(data => {
                  return(
                    // fragment berfungsi seperti pembungkus element child
                    <>
                        <tr>
                            {
                              Object.keys(data).map(key => 
                                <th>{data[key]}</th>
                              )
                            }
                          <th><button onClick={() => onDelete(data.id)}>Delete</button></th>
                        </tr>
                    </>
                )
                })
            }
        </tbody>
      </table>
    </>
  )
}

export default MyTable