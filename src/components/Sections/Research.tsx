import React, {memo} from 'react'; // Memo import added
import {withBasePath} from '../../config';
import {collaborations, research, SectionId} from '../../data/data'; // External import
import Section from '../Layout/Section'; // Internal import

const ResearchSection = memo(() => {
  // Log the research data to check if it is an array and contains the expected data
  console.log(research); // This will log the data in the browser console

  return (
    <Section sectionId={SectionId.Research} className="bg-black text-white">
      {/* "Research" title with bigger font and lighter grey */}
      <h2 className="text-4xl font-bold text-gray-300 mb-6">Research</h2> {/* Bigger and lighter grey */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <ul className="space-y-6 lg:flex-1">
          {research.map((item, index) => (
            <li key={index} className="border-l-4 border-blue-500 pl-4">
              {/* Location in slightly smaller font (still white) */}
              <div className="text-3xl font-bold text-white">{item.location}</div>

              {/* Title in smaller font (grey) */}
              <div className="text-xl font-semibold text-gray-400">{item.title}</div>

              {/* Date in smaller font (light grey) */}
              <div className="text-sm text-gray-400">{item.date}</div>

              <div className="text-gray-200">{item.content}</div>
            </li>
          ))}
        </ul>
        {/* Looping simulation video */}
        <figure className="lg:w-2/5 lg:shrink-0">
          <video
            autoPlay
            className="w-full rounded-lg"
            loop
            muted
            playsInline
            src={withBasePath('/assets/rhop_ratio.mp4')}
          />
          <figcaption className="mt-2 text-sm text-gray-400">
            Streaming instability simulation (unstratified), Run BA (
            <a
              className="underline hover:text-white"
              href="https://doi.org/10.1086/516730"
              rel="noreferrer"
              target="_blank">
              Johansen &amp; Youdin 2007
            </a>
            ).
          </figcaption>
        </figure>
      </div>
      {/* Collaborations */}
      <h3 className="mt-12 text-3xl font-bold text-white">Collaborations</h3>
      <ul className="mt-4 space-y-6">
        {collaborations.map((item, index) => (
          <li key={index} className="border-l-4 border-blue-500 pl-4">
            <div className="text-2xl font-bold text-white">{item.name}</div>
            <div className="text-gray-200">{item.content}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
});

ResearchSection.displayName = 'ResearchSection';

export default ResearchSection;
