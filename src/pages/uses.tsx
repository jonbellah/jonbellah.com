import React from 'react';
import Helmet from 'react-helmet';

import PageHeader from 'components/PageHeader';

const Uses: React.FC = () => {
  return (
    <div>
      <Helmet
        title="Uses | JonBellah.com"
        meta={[
          {
            name: 'description',
            content:
              'Jon is a software engineer, speaker, and occasional writer living in the beautiful city of Denver, Colorado.',
          },
        ]}
      />
      <div className="prose prose-lg text-gray-500 mx-auto pb-24 p-4">
        <PageHeader>Uses</PageHeader>

        <div>
          <strong>Video</strong>
          <ul>
            <li>
              Camera: <a href="https://amzn.to/3h0FJHR">Sony A6100</a>
            </li>
            <li>
              Lens: <a href="https://amzn.to/37yfCEY">Sigma 16mm f/1.4</a>
            </li>
            <li>
              Capture: <a href="https://amzn.to/3h3JU5z">Elgato Cam Link 4K</a>
            </li>
          </ul>

          <strong>Audio</strong>
          <ul>
            <li>
              Microphone: <a href="https://amzn.to/37x61hC">Rode Procaster</a>
            </li>
            <li>
              Interface:{' '}
              <a href="https://amzn.to/37wpbnW">Behringer U-Phoria UMC22</a>
            </li>
            <li>
              Preamp: <a href="https://amzn.to/37yH0Tn">dbx 286s</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Uses;
