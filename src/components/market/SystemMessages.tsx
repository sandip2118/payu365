import React from 'react';
import Icons from '@/assets/icon';
import Card from '../Common/Card';

const SystemMessages = () => {
  const barsData = [
    {
      id: 0,
      icon: <Icons.Envelope />,
      heading: 'Login attempted from new IP',
      slug: 'The system has detected that your account is logged in from an unused IP address. Account: 8140743288 Device: Chrome V120.0.0.0 (Windows) Time: 2023-12-15 06:58:37(UTC) IP: 49.36.80.72 If this activity is not your own operation, please disable your account and contact us immediately.',
      link: 'View More',
      time: '04:35',
    },
    {
      id: 1,
      icon: <Icons.Envelope />,
      heading: 'Login attempted from new IP',
      slug: 'The system has detected that your account is logged in from an unused IP address. Account: 8140743288 Device: Chrome V120.0.0.0 (Windows) Time: 2023-12-15 06:58:37(UTC) IP: 49.36.80.72 If this activity is not your own operation, please disable your account and contact us immediately.',
      link: 'View More',
      time: '04:35',
    },
    {
      id: 2,
      icon: <Icons.Envelope />,
      heading: 'Login attempted from new IP',
      slug: 'The system has detected that your account is logged in from an unused IP address. Account: 8140743288 Device: Chrome V120.0.0.0 (Windows) Time: 2023-12-15 06:58:37(UTC) IP: 49.36.80.72 If this activity is not your own operation, please disable your account and contact us immediately.',
      link: 'View More',
      time: '04:35',
    },
    {
      id: 3,
      icon: <Icons.Envelope />,
      heading: 'Login attempted from new IP',
      slug: 'The system has detected that your account is logged in from an unused IP address. Account: 8140743288 Device: Chrome V120.0.0.0 (Windows) Time: 2023-12-15 06:58:37(UTC) IP: 49.36.80.72 If this activity is not your own operation, please disable your account and contact us immediately.',
      link: 'View More',
      time: '04:35',
    },
    {
      id: 4,
      icon: <Icons.Envelope />,
      heading: 'Login attempted from new IP',
      slug: 'The system has detected that your account is logged in from an unused IP address. Account: 8140743288 Device: Chrome V120.0.0.0 (Windows) Time: 2023-12-15 06:58:37(UTC) IP: 49.36.80.72 If this activity is not your own operation, please disable your account and contact us immediately.',
      link: 'View More',
      time: '04:35',
    },
    {
      id: 5,
      icon: <Icons.Envelope />,
      heading: 'Login attempted from new IP',
      slug: 'The system has detected that your account is logged in from an unused IP address. Account: 8140743288 Device: Chrome V120.0.0.0 (Windows) Time: 2023-12-15 06:58:37(UTC) IP: 49.36.80.72 If this activity is not your own operation, please disable your account and contact us immediately.',
      link: 'View More',
      time: '04:35',
    },
    {
      id: 6,
      icon: <Icons.Envelope />,
      heading: 'Login attempted from new IP',
      slug: 'The system has detected that your account is logged in from an unused IP address. Account: 8140743288 Device: Chrome V120.0.0.0 (Windows) Time: 2023-12-15 06:58:37(UTC) IP: 49.36.80.72 If this activity is not your own operation, please disable your account and contact us immediately.',
      link: 'View More',
      time: '04:35',
    },
    {
      id: 7,
      icon: <Icons.Envelope />,
      heading: 'Login attempted from new IP',
      slug: 'The system has detected that your account is logged in from an unused IP address. Account: 8140743288 Device: Chrome V120.0.0.0 (Windows) Time: 2023-12-15 06:58:37(UTC) IP: 49.36.80.72 If this activity is not your own operation, please disable your account and contact us immediately.',
      link: 'View More',
      time: '04:35',
    },
  ]
  return (
    <>
      <Card title='System Messages' isBorder={true}>
        <div className="main-container">
          {barsData.map((bar) => (
            <div
              className="py-[10px] border-b border-GRAY_101 dark:border-gray-700 flex gap-[20px] items-center"
              key={bar.id}
            >
              <div className="icon bg-BLACK_303 rounded-[30px] p-3 w-12 h-12 flex justify-center items-center hover:bg-BLACK_302">
                {bar.icon}
              </div>
              <div className="details flex-col flex justify-evenly w-[95%]">
                <div className="heading_with_time flex justify-between">
                  <h6 className="text-[14px]">{bar.heading}</h6>
                  <p className="text-[14px] text-GRAY_101">{bar.time}</p>
                </div>
                <p className="text-[12px] text-GRAY_101 line-clamp-1">
                  {bar.slug}
                </p>
                <a href="#" className="text-[10px] text-YELLOW_01">
                  {bar.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}

export default SystemMessages;
