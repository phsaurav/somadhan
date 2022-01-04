// import issueList from '../../fakeData/issueLists.json';
import './IssueCard.css';

const IssueCard = (props) => {
  const { date, time, issue_name, description } = props.issue;

  const handleDetails = () => {
    document
      .getElementById('detailsContainer')
      .classList.toggle('toggleDetails');
  };

  return (
    <div className="container mx-auto mt-20">
      <div
        className="lg:flex shadow rounded-lg border h-32  border-gray-400 mb-4 mx-auto ease-in duration-300"
        id="detailsContainer"
      >
        <div className="bg-red-500 rounded-lg lg:w-2/12 pt-2 block h-full shadow-inner">
          <div className="text-center tracking-wide">
            <div className="text-white font-bold text-2xl p-2">{date}</div>
          </div>
        </div>
        <div className="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
          <div className="flex flex-row lg:justify-start justify-center">
            <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
              <i className="far fa-clock"></i> {time}
            </div>
          </div>
          <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
            Issue: {issue_name}
          </div>

          <div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2 ">
            {description}
          </div>
        </div>
        <div className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-evenly px-2 py-4 lg:px-0">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-2">
            Delete
          </button>
          <button
            onClick={handleDetails}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
          >
            Details
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
            Resolving
          </button>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
