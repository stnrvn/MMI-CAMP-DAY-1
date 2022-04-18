
import { Link } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom'

const MyTable = ({
  columns,
  datas,
  handleAdd,
  handleUpdate,
  onDelete
}) => {
  const history = useHistory()

  return(
    <>
    <Link to="/cars/add">
      add cars
    </Link>
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
                                <th >
                                  <Link to={`/cars/edit/${data.id}`}>
                                    {data[key]}
                                  </Link>
                                </th>
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