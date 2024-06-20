import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/nhatminh4401" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/%C4%91o%C3%A0n-nh%E1%BA%ADt-minh-b968861ab/",
  },
];
const Social = ({ containerStyle, iconStyles }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
