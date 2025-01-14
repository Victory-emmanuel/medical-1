const TopInfoBar = () => {
  return (
    <div className="bg-secondary text-white text-sm py-2 px-6 ss:px-12 ss:block hidden top-0 fixed z-[50] w-full">
      <div className=" mx-auto flex justify-between gap-4 items-center">
        <div className="space-x-4">
          <span>Email: info@opticare.com</span>
          <span>Office: 123 Main St, Suite 456</span>
        </div>
        <div className="space-x-4">
          <span>Phone: +123-456-7890</span>
          <span>Hours: Mon-Fri 9:00-18:00</span>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
