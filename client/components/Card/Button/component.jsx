import Link from 'next/link';

export const Button = ({ username }) => {
  return (
    <div className='w-full flex justify-center items-center h-full mt-12 flex-col'>
      <Link href={`/${username}`}>
        <button className='flex bg-[#3a3a3d] p-3 rounded-md gap-2 font-semibold' disabled>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M11.656 1.06107C11.6987 1.04539 11.7425 1.0326 11.7871 1.02283C11.9307 0.991368 12.0756 0.992766 12.213 1.02283C12.2576 1.0326 12.3014 1.04539 12.3441 1.06107C15.1652 2.08718 17.6052 3.4142 19.3308 5.48484C21.0562 7.55537 21.979 10.2612 21.9997 13.8755L22.9702 17.7575C23.0385 18.0308 22.9884 18.3203 22.8321 18.5547C21.7029 20.2486 19.7315 22.0477 16.2557 22.9668C15.9557 23.0461 15.6359 22.9817 15.39 22.7924C15.1441 22.6031 15.0001 22.3103 15.0001 22V16C15.0001 15.7241 15.114 15.4605 15.315 15.2715C16.7209 13.9495 16.6244 12.3545 16.256 10.9885C16.1391 10.9853 16.0256 10.9818 15.9163 10.9784L15.905 10.978C15.6336 10.9695 15.3917 10.9621 15.1645 10.9609C14.7035 10.9586 14.3725 10.9838 14.1093 11.0516C13.8678 11.1138 13.6845 11.2118 13.5173 11.3764C13.359 11.5322 13.181 11.7817 13 12.1983V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12.1983C10.8191 11.7817 10.6411 11.5322 10.4828 11.3764C10.3156 11.2118 10.1323 11.1138 9.89077 11.0516C9.62761 10.9838 9.29657 10.9586 8.83559 10.9609C8.60835 10.9621 8.36643 10.9695 8.09503 10.978L8.08253 10.9784C7.9736 10.9818 7.86056 10.9853 7.74402 10.9885C7.37566 12.3545 7.27914 13.9495 8.68506 15.2715C8.88603 15.4605 9 15.7241 9 16V22C9 22.3103 8.85594 22.6031 8.61007 22.7924C8.36419 22.9817 8.04436 23.0461 7.74436 22.9668C4.26859 22.0477 2.29721 20.2486 1.16795 18.5547C1.01167 18.3203 0.961529 18.0308 1.02986 17.7575L2.00036 13.8755C2.02103 10.2612 2.94384 7.55537 4.66928 5.48484C6.39482 3.4142 8.83481 2.08718 11.656 1.06107ZM12.1145 9.95086C12.0755 9.98918 12.0374 10.0286 12 10.069C11.9627 10.0286 11.9245 9.98918 11.8856 9.95086C11.4371 9.50958 10.9288 9.25377 10.3899 9.11488C9.87277 8.98158 9.33478 8.95835 8.82534 8.96096C8.56786 8.96228 8.29976 8.97065 8.03415 8.97894L8.03055 8.97905C7.76113 8.98746 7.48965 8.99593 7.20588 8.99892C6.66271 9.00463 6.15582 9.35093 5.98037 9.90119C5.50188 11.4018 4.88197 14.1285 7 16.4117V20.6314C5.04393 19.8856 3.84223 18.8104 3.08141 17.7975L3.97015 14.2426C3.98998 14.1632 4.00001 14.0818 4.00001 14C4.00001 10.6768 4.82593 8.42097 6.20573 6.76521C7.54462 5.15854 9.48816 4.0153 12 3.06646C14.5119 4.0153 16.4554 5.15854 17.7943 6.76521C19.1741 8.42097 20.0001 10.6768 20.0001 14C20.0001 14.0818 20.0101 14.1632 20.0299 14.2426L20.9187 17.7975C20.1578 18.8104 18.9561 19.8856 17.0001 20.6314V16.4117C19.1181 14.1285 18.4982 11.4018 18.0197 9.90119C17.8442 9.35093 17.3374 9.00463 16.7942 8.99892C16.5104 8.99593 16.239 8.98746 15.9696 8.97905L15.966 8.97894C15.7004 8.97065 15.4322 8.96228 15.1747 8.96096C14.6653 8.95835 14.1273 8.98158 13.6101 9.11488C13.0713 9.25377 12.5629 9.50958 12.1145 9.95086Z'
              fill='#FFFFFF'
            />
          </svg>
          CHAMPION STATS
        </button>
      </Link>
    </div>
  );
};
