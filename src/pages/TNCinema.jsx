import React, { useState } from 'react';
import { PollData } from '../PollData';

const TNCinema = () => {
  const [viewVotes, setViewVotes] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const totalVotes = PollData.reduce((total, data) => total + data.noOfVotes, 0);

  const [totaleVoteCal, setTotalVoteCal] = useState(totalVotes);

  const [percentages, setPercentages] = useState(
    PollData.map((data) => ({
      id: data.id,
      percentage: (data.noOfVotes / totalVotes) * 100,
    }))
  );

  const handleOptionClick = (id) => {
    if (selectedOption !== null) {
      return;
    }

    const selectedData = PollData.find((data) => data.id === id);

    selectedData.noOfVotes += 1;

    const newTotalVotes = PollData.reduce(
    (total, data) => total + data.noOfVotes,
    0
    );

    setTotalVoteCal(newTotalVotes)

    setPercentages(
      PollData.map((data) => ({
        id: data.id,
        percentage: (data.noOfVotes / newTotalVotes) * 100,
      }))
    );

    setSelectedOption(selectedData);
  };

  return (
    <div className='w-full min-h-screen pt-10 relative'>
      <h1 className='max-w-[900px] mx-auto text-deep_blue text-xl tablet:text-3xl font-semibold flex items-center justify-between relative px-5'>
        {viewVotes && (
          <span
            className='material-symbols-outlined cursor-pointer text-3xl'
            onClick={() => {
              setViewVotes(false);
            }}
          >
            arrow_back
          </span>
        )}
        <p>Thursday Night</p>
        <p></p>
      </h1>
      {!viewVotes && (
        <div className='max-w-[900px] mx-auto pt-10'>
          {!viewVotes && <div className='max-w-[900px] mx-auto pt-10'>
            <h2 className='bg-[#040B2E0D] font-semibold px-5 py-2'>Categories</h2>
            <ul className='w-full flex flex-col gap-2 mt-4'>
              <li className="w-full px-5 py-3 flex items-center justify-between cursor-pointer hover:bg-[#040B2E0D]">
                <p className='font-semibold text-deep_blue'>Animation</p>
                <span className='material-symbols-outlined'>chevron_right</span>
              </li>
            </ul>
            <div className='w-full flex justify-center mt-6'>
              <button className='px-8 py-2 rounded-md bg-deep_blue text-[white]'>Random</button>
            </div>
            <p className='max-w-[300px] border border-deep_blue py-2 text-center mx-auto mt-8 rounded-md font-semibold text-deep_blue cursor-pointer' onClick={() => setViewVotes(true)}>Viewers night cinema voting poll</p>
          </div>}
        </div>
      )}
      {viewVotes && (
        <div className='max-w-[900px] mx-auto pt-10 pb-16 text-deep_blue px-5 tablet:px-10'>
          <h2 className='font-semibold text-center text-sm tablet:mt-10'>
            Viewers night voting poll
          </h2>
          <p className='text-center mt-6'>
            Participate in <b>Viewers night cinema voting poll</b> for a chance
            to watch your favorite movie!
          </p>
          <div className='w-full'>
            <div className='w-full flex flex-col items-center justify-center '>
              <ul className='w-full items-center flex flex-col gap-2 mt-8'>
                {PollData.map((data) => (
                <li
                key={data.id}
                className={`w-full max-w-[500px] flex items-center ${selectedOption !== null ? 'justify-between' : 'justify-center'} font-semibold cursor-pointer text-sm tablet:text-[17px] relative`} onClick={() => handleOptionClick(data.id)}>
                <div className={`bg-[#040B2E0D] w-full h-[50px] flex items-center ${selectedOption !== null ? 'justify-between rounded-lg' : 'justify-center rounded-full'} py-3 ${selectedOption?.id === data.id && 'selected'} `}
                  style={{ width: selectedOption !== null ? `${percentages.find((p) => p.id === data.id)?.percentage || 0}%` : ``, transition: 'width ease 0.5s' }}>
                      <p className={`${selectedOption !== null ? 'absolute left-2' : ''}`}>{data.movieName}</p>
                    </div>
                    {selectedOption !== null && (
                      <p className='visible absolute right-2'>
                        {percentages.find(
                          (percentage) => percentage.id === data.id
                        )?.percentage.toFixed(0)}%
                      </p>
                    )}
                </li>
                ))}
              </ul>
              <div className='w-full max-w-[500px] mt-5'>
                <p className='font-semibold'>Others (Specify below)</p>
                <p className="text-sm mt-3 text-[gray]">{totaleVoteCal} {totaleVoteCal <= 1 ? 'vote' : 'votes'}. 3 days ago. 5 hours left</p>

                <div className='w-full flex justify-around text-[#AAAAAA] mt-8'>
                  <p className="flex items-center gap-2"><span className='material-symbols-outlined icon_filled'>message</span><span>comment</span></p>
                  <p className="flex items-center gap-2"><span className='material-symbols-outlined icon_filled text-[#F44336]'>favorite</span>10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TNCinema;
