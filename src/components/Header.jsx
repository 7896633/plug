
import Button from "./Button";


const Header = () => {
  return (
    <div
      className='fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm flex justify-center items-center'
    >
      logo
      <div className="lg:px-7.5 xl:px-10 max-lg:py-4">
        <Button>
          <div className='flex items-center w-[700px]'>
            <input className='flex-1 focus:ring-0 outline-none rounded-none rounded-md py-1 pl-4 text-white bg-transparent' placeholder='123'/>
            <div className='transition-colors hover:text-color-1'>
              确定
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Header;
