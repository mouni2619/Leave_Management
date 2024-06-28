import { useDispatch, useSelector } from 'react-redux';

// Actions
import { AuthActions } from './store/redux-slices/AuthSlice';

// CSS
import './App.scss';

/**
 * App Component
 */
export default function App() {
  // Dispatch
  const dispatch = useDispatch();

  // Selector States
  const user = useSelector((state) => state.auth.authUser);
  const { name, projectName } = user;

  // get user data
  function getUserData() {
    dispatch(AuthActions.login({}));
  }

  // clear user data
  function clearUserData() {
    dispatch(AuthActions.resetLogin());
  }

  // button data
  const buttonsData = [
    { label: 'Get Data', className: 'btn-primary', onClick: getUserData },
    {
      label: 'Clear Data',
      className: 'btn-danger mx-2',
      onClick: clearUserData,
    },
  ];

  return (
    <div className="text-center my-5">
      <h1>---- App File ----</h1>

      {/* user data section */}
      <div className="my-5">
        <h3>Redux Integrated Dummy Data</h3>

        {/* buttons */}
        <div className="my-3">
          {buttonsData.map((btnInfo, i) => {
            const { label, className, onClick } = btnInfo;
            return (
              <button
                key={i}
                className={`btn rounded-3 ${className}`}
                onClick={onClick}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* data */}
        <h5>User Name : {name} </h5>
        <h5>Project Name : {projectName}</h5>
      </div>
    </div>
  );
}
