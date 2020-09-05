import React from 'react';

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
    >
      <path
        fill="currentColor"
        d="M24.08,0H80v57.6c-0.779,5.881-3.25,11.69-7.811,15.61C67.68,77.2,61.77,79.22,55.891,80H0 V22.44c0.66-4.72,2.25-9.41,5.35-13.1C9.89,3.7,17.07,0.92,24.08,0z"
      ></path>
      <g>
        <path
          fill="#fff"
          d="M27.203,20.478h11.553c5.264,0,9.086,0.749,11.465,2.247c2.377,1.498,3.566,3.881,3.566,7.147 c0,2.218-0.521,4.037-1.562,5.459s-2.425,2.276-4.15,2.564v0.254c2.353,0.524,4.05,1.507,5.091,2.946s1.562,3.353,1.562,5.738 c0,3.385-1.223,6.024-3.668,7.922c-2.447,1.896-5.77,2.845-9.967,2.845H27.203V20.478z M35.074,35.179h4.57 c2.133,0,3.678-0.33,4.633-0.99c0.957-0.66,1.436-1.752,1.436-3.275c0-1.422-0.521-2.441-1.562-3.06s-2.688-0.927-4.938-0.927 h-4.139V35.179z M35.074,41.426V51.1h5.129c2.166,0,3.766-0.416,4.799-1.244c1.032-0.83,1.549-2.1,1.549-3.809 c0-3.082-2.201-4.621-6.602-4.621H35.074z"
        ></path>
      </g>
    </svg>
  );
};

export default Logo;