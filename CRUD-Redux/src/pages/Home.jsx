import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../state/reducers/user/userReducer';

const Home = () => {
  const users = useSelector((state) => state.users); // users is the reducer name
  console.log(users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="container mt-3">
      <h2>CRUD APP with JSON Server</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-align-center">
          {users.length === 0 ? (
            <tr>
              <td>No data found</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td className="pt-3">{user.id}</td>
                <td className="pt-3">{user.name}</td>
                <td className="pt-3">{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger ms-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
