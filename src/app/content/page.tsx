import { FaCircle ,FaSync, FaFileAlt} from "react-icons/fa";
import Settings from "../settingsComponent/page";


const Content = () => {
  return (
    <>
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          
          {/* Dashboard Card */}
          <div className="bg-white rounded-lg shadow-lg p-4 row-span-1 sm:row-span-2">
            <div className="p-4 rounded-t-lg">
              <h1>Dashboard</h1>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-3xl font-bold">100</h3>
            </div>
          </div>
          
          {/* Pending Approvals Card */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className=" p-4 rounded-t-lg">
              Pending Approvals
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold">100</p>
                <FaCircle className="text-green-500" />
              </div>
            </div>
          </div>

          {/* Rejected Tasks Card */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className=" p-4 rounded-t-lg">
              Rejected Tasks
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold">100</p>
                <FaCircle className="text-gray-500" />
              </div>
            </div>
          </div>

          {/* Repair Tasks Card */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className=" p-4 rounded-t-lg">
              Repair Tasks
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold">100</p>
                <FaCircle className="text-blue-500" />
              </div>
            </div>
          </div>

          {/* Settings Card */}
          <Settings/>

          {/* Tasks in Progress Card */}
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
            <div className="flex justify-center mb-4">
              <FaSync size={80}/>
            </div>
              <div>
                <p className="text-center">Tasks in progress</p>
              </div>
          </div>  
          
          {/* Notes Card */}
          <div className="bg-white rounded-lg shadow-lg p-4 ">
            <div className="flex justify-center mb-4">
              <FaFileAlt size={80} />
            </div>
            <div className="">
              <p className="text-center">Notes</p>
            </div>
          </div>


          {/* Initiate Repossession Card */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="p-4 rounded-t-lg">
              Initiate Repossession
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold">100</p>
                <FaCircle className="text-yellow-500" />
              </div>
            </div>
          </div>

          

          

          
        </div>
      </div>
    </>
  );
};

export default Content;
