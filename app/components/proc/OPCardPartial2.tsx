'use client'

import React, { useState } from 'react';

type CardType = {
    step: string
    title: string
    subTitle: string
    subDesc: string
    description: string
    image: string
}

const data: CardType[] = [
    {
        step: '02',
        title: 'Strategy',
        subTitle: 'Deciding how your brand look like',
        subDesc: "We get on a call and plan out everything before creating anything.",
        description:
            "We align on your brand direction,messaging, and aesthetic so when we start designing, we're not guessing instead we're executing a plan",
        image: "/illustrations/two.svg"
    },
    {
        step: '04',
        title: 'Go Live',
        subTitle: 'Your site goes live + we stay available',
        subDesc: "Your new brand launches, you get all the files, and we're here for 30 days after.",
        description:
            "We walk you through how to use everything, handle any bugs or tweaks, and make sure you're comfortable. The relationship doesn't end at launch.",
        image: "/illustrations/four.svg"
    },
]

type HoverState = 'top' | 'bottom' | null;

const OPCardCol2 = () => {
  const [hoveredContainer, setHoveredContainer] = useState<HoverState>(null);

  let topFlex = 1;
  let bottomFlex = 1;

  if (hoveredContainer === 'top') {
    topFlex = 3;    
    bottomFlex = 1; 
  } else if (hoveredContainer === 'bottom') {
    topFlex = 1;    
    bottomFlex = 3; 
  }

  const showTopImage = hoveredContainer !== 'bottom';
  const showBottomImage = hoveredContainer !== 'top';
  const topImageTransform = 'translate(0%, 18%)';
  const bottomImageTransform = 'translate(0%, 40%)';

  const getCardState = (card: Exclude<HoverState, null>) => {
    if (hoveredContainer === null) return 'idle';
    return hoveredContainer === card ? 'expanded' : 'collapsed';
  };

  const topCardState = getCardState('top');
  const bottomCardState = getCardState('bottom');

  const topShowSubDesc = topCardState !== 'collapsed';
  const topShowDescription = topCardState === 'expanded';
  const bottomShowSubDesc = bottomCardState !== 'collapsed';
  const bottomShowDescription = bottomCardState === 'expanded';

  return (
    <div
      className='proc'
      // style={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   height: '400px', 
      //   width: '425px',
      //   gap: '12px',
      //   padding: '12px'
      // }}
    >
      <div
        onMouseEnter={() => setHoveredContainer('top')}
        onMouseLeave={() => setHoveredContainer(null)}
        style={{
          flex: topFlex,
          backgroundColor: '#6755CF', 
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          transition: 'flex 300ms ease'
        }}
      >
        {/* TOP CARD: text container */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            padding: '26px 18px 16px 26px',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* TOP CARD: step (top-right) */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '18px',
              fontSize: '75px',
              fontWeight: 800,
              lineHeight: 0.85,
              opacity: 0.95,
              pointerEvents: 'none'
            }}
            className='quantaFont mt-1'
          >
            {data[0].step}
          </div>

          {/* TOP CARD: left text stack wrapper */}
          <div style={{ width: '100%', position: 'relative', zIndex: 3 }}>
            {/* TOP CARD: title */}
            <div style={{ maxWidth: '72%', fontSize: '32px', fontWeight: 800, lineHeight: 1.0 }} className='quantaFont normal-case!'>
              {data[0].title}
            </div>

            {/* TOP CARD: subTitle */}
            <div
              style={{
                maxWidth: '72%',
                lineHeight: 1.15
              }}
              className='max-sm:text-[13px] text-[15px] max-sm:mt-0 mt-2 font-medium'
            >
              {data[0].subTitle}
            </div>

            {/* TOP CARD: subDesc (hidden in collapsed state) */}
            <div
              style={{
                maxWidth: '50%',
                marginTop: topShowSubDesc ? '12px' : '0px',
                fontSize: '13px',
                lineHeight: 1.18,
                opacity: topShowSubDesc ? 1 : 0,
                maxHeight: topShowSubDesc ? '120px' : '0px',
                overflow: 'hidden',
                transition: 'opacity 180ms ease, max-height 220ms ease, margin-top 220ms ease'
              }}
              className='font-medium'
            >
              {data[0].subDesc}
            </div>

            {/* TOP CARD: description (visible only in expanded state with fade-in) */}
            <div
              style={{
                maxWidth: '50%',
                marginTop: topShowDescription ? '12px' : '0px',
                fontSize: '13px',
                lineHeight: 1.2,
                opacity: topShowDescription ? 1 : 0,
                transform: topShowDescription ? 'translateY(0px)' : 'translateY(4px)',
                maxHeight: topShowDescription ? '220px' : '0px',
                overflow: 'hidden',
                transition: 'opacity 220ms ease, transform 220ms ease, max-height 280ms ease, margin-top 220ms ease'
              }}
              className='font-medium'
            >
              {data[0].description}
            </div>
          </div>
        </div>

        {/* TOP CARD: illustration */}
        <img
          src={data[0].image}
          alt="Top illustration"
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            opacity: showTopImage ? 1 : 0,
            transform: topImageTransform,
            transformOrigin: 'bottom right',
            transition: 'opacity 180ms ease, transform 300ms ease',
            pointerEvents: 'none',
            zIndex: 99,
            height: '100%',
          }}
        />
      </div>

      <div
        onMouseEnter={() => setHoveredContainer('bottom')}
        onMouseLeave={() => setHoveredContainer(null)}
        style={{
          flex: bottomFlex,
          backgroundColor: '#6755CF', 
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          transition: 'flex 300ms ease'
        }}
      >
        {/* BOTTOM CARD: text container */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            padding: '26px 18px 16px 26px',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* BOTTOM CARD: step (top-right) */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '18px',
              fontSize: '75px',
              fontWeight: 800,
              lineHeight: 0.85,
              opacity: 0.95,
              pointerEvents: 'none'
            }}
            className='quantaFont mt-1'
          >
            {data[1].step}
          </div>

          {/* BOTTOM CARD: left text stack wrapper */}
          <div style={{ width: '100%', position: 'relative', zIndex: 3 }}>
            {/* BOTTOM CARD: title */}
            <div style={{ maxWidth: '72%', fontSize: '32px', fontWeight: 800, lineHeight: 1.0 }} className='quantaFont normal-case!'>
              {data[1].title}
            </div>

            {/* BOTTOM CARD: subTitle */}
            <div
              style={{
                maxWidth: '72%',
                // marginTop: '8px',
                lineHeight: 1.15
              }}
              className='max-sm:text-[13px] text-[15px] max-sm:mt-0 mt-2 font-medium'
            >
              {data[1].subTitle}
            </div>

            {/* BOTTOM CARD: subDesc (hidden in collapsed state) */}
            <div
              style={{
                maxWidth: '72%',
                marginTop: bottomShowSubDesc ? '12px' : '0px',
                fontSize: '13px',
                lineHeight: 1.18,
                opacity: bottomShowSubDesc ? 1 : 0,
                maxHeight: bottomShowSubDesc ? '120px' : '0px',
                overflow: 'hidden',
                transition: 'opacity 180ms ease, max-height 220ms ease, margin-top 220ms ease'
              }}
              className='font-medium'
            >
              {data[1].subDesc}
            </div>

            {/* BOTTOM CARD: description (visible only in expanded state with fade-in) */}
            <div
              style={{
                maxWidth: '60%',
                marginTop: bottomShowDescription ? '12px' : '0px',
                fontSize: '13px',
                lineHeight: 1.2,
                opacity: bottomShowDescription ? 1 : 0,
                transform: bottomShowDescription ? 'translateY(0px)' : 'translateY(4px)',
                maxHeight: bottomShowDescription ? '220px' : '0px',
                overflow: 'hidden',
                transition: 'opacity 220ms ease, transform 220ms ease, max-height 280ms ease, margin-top 220ms ease'
              }}
              className='font-medium'
            >
              {data[1].description}
            </div>
          </div>
        </div>

        {/* BOTTOM CARD: illustration */}
        <img
          src={data[1].image}
          alt="Bottom illustration"
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            opacity: showBottomImage ? 1 : 0,
            transform: bottomImageTransform,
            transformOrigin: 'bottom right',
            transition: 'opacity 180ms ease, transform 300ms ease',
            pointerEvents: 'none',
            zIndex: 99,
            height: '130%',
          }}
        />
      </div>
    </div>
  );
};

export default OPCardCol2;