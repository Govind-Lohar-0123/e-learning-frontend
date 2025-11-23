import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../redux/actions/userActions';

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const user = useSelector((state) => state.userData);

  return (
    <>
      <div className=" w-100 h-100 d-flex align-items-center justify-content-center">
        <form className="shadow p-5  flex-wrap" id="profile">
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              value={user.name}
              readOnly
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group my-3">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              readOnly
              value={user.email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </form>
      </div>
    </>
  );
}
