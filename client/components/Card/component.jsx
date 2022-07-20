import { useState } from 'react';
import { MostPlayed } from './MostPlayed';
import { RankUp } from './RankUp';
import { Stats } from './Stats';
import { Header } from './Header';
import Link from 'next/link';

export const Card = ({ playerData, index }) => {
  const cardUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${playerData.mostPlayed[0].champion}_0.jpg`;

  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${cardUrl})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '450px 230px',
        backgroundBlendMode: 'overlay',
      }}
      className='flex justify-center items-center flex-col bg-[#1f1f23] 
      drop-shadow-lg text-white p-10 m-3 rounded-lg w-96 h-96 gap-3'
    >
      <Header
        username={playerData.username}
        name={playerData.name}
        index={index}
      />
      <Stats
        tier={playerData.tier}
        p_rank={playerData.p_rank}
        lp={playerData.lp}
        wr={playerData.wr}
        progress={playerData.progress}
      />
      <div className='flex mt-5 w-full justify-between'>
        <RankUp tier={playerData.tier} lp_to_uprank={playerData.lp_to_uprank} />
        {/* <Link href={`/${playerData.username}`}>
          <button
            className='bg-[#3a3a3d] p-3 flex flex-col gap-2 rounded-md group 
            justify-center items-center'
            onMouseEnter={() => setToggleIcon(true)}
            onMouseLeave={() => setToggleIcon(false)}
          >
            <h6 className='font-bold group-hover:text-[#cd4241]'>
              CHAMPION STATS
            </h6>
            {toggleIcon ? (
              <img src='/champion_red.svg' className='h-12' />
            ) : (
              <img src='/champion_white.svg' className='h-12' />
            )}
          </button>
        </Link> */}
        <MostPlayed mostPlayed={playerData.mostPlayed} />
      </div>
    </div>
  );
};
