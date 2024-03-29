export const Title = () => {
  return (
    <div
      className='flex m-3 items-center justify-center gap-5 col-span-2
  bg-[#1f1f23] drop-shadow-lg p-4 pl-5 rounded-lg text-white'
    >
      <a href='https://vinine.de' target='_blank' rel='noreferrer'>
        <img src='../vinine.png' alt='logo' className='h-8' />
      </a>
      <div className='uppercase font-bold w-fit text-md text-white sm:text-2xl'>
        <span>GRANDMASTER </span>
        <span className='text-[#d9b042]'>CHALLENGE</span>
      </div>
    </div>
  );
};
