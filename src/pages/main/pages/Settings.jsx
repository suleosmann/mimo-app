

const Settings = () => {
  return (
    <div className=" p-2 mx-4">
      <div className="text-lg font-semibold mb-4">Account</div>
      <div className="bg-white flex items-center justify-between  px-3 py-2 border-b-2">
        <div>j.smith@gmail.com</div>
        <div>&gt;</div>
      </div>
      <div className="bg-white flex items-center justify-between px-3 py-2 ">
        <div>Privacy/Security</div>
        <div>&gt;</div>
      </div>
      <div className="py-2 font-semibold">App Settings</div>
      <div className="px-3 py-2 bg-white border-b-2 flex items-center justify-between">
        <div>Notifications</div>
        <div>&gt;</div>        
      </div>
      <div className="px-3 py-2 bg-white border-b-2 flex items-center justify-between">
        
        <div>Text Size</div>
        <div>&gt;</div>
        </div>
      <div className=" bg-white flex items-center justify-between px-3 py-2">
        <div>Dark Mode</div>
        <div className="bg-gray-300 rounded-full w-12 h-6 flex items-center px-1">
          <div className="bg-white w-5 h-5 rounded-full"></div>
        </div>
      </div>
      <div className="py-2 font-semibold">Manage Wallet</div>
      <div className="px-3 py-2 bg-white border-b-2 flex items-center justify-between">
        <div> Wallet Type</div>
        <div>&gt;</div>
        </div>
        <div className="px-3 py-2 bg-white border-b-2 flex items-center justify-between">
        <div>Top Up Methods</div>
        <div>&gt;</div>
        </div>
      <div className=" py-2 font-semibold">Help</div>
      <div className="px-3 py-2 bg-white border-b-2 flex items-center justify-between">
      <div>FAQs</div>
        <div>&gt;</div>
        </div>
        <div className="px-3 py-2 bg-white border-b-2 flex items-center justify-between">
        <div>Contact Us</div>
        <div>&gt;</div>
        </div>
        <div className="px-3 py-2 bg-white border-b-2 flex items-center justify-between">
        <div>About</div>
        <div>&gt;</div>
        </div>
    </div>
  );
};

export default Settings;