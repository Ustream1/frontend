import HomeIcon from '../assets/images/home_icon_white.png';
import EarningIcon from '../assets/images/earning_icon.png';
import VideoIcon from '../assets/images/video_icon.png';
import CommunityIcon from '../assets/images/community_icon.png';
import UserIcon from '../assets/images/user_icon.png';

export const NavRouting = [
    {
        id: 1,
        navName: 'Home',
        navImage: HomeIcon,
        navLink: '/app/movies'
    },
    {
        id: 2,
        navName: 'Earnings',
        navImage: EarningIcon,
        navLink: '/app/earnings'
    },
    {
        id: 3,
        navName: 'TN Cinema',
        navImage: VideoIcon,
        navLink: '/app/tn_cinema'
    },
    {
        id: 4,
        navName: 'Community',
        navImage: CommunityIcon,
        navLink: '/app/community'
    },
    {
        id: 5,
        navName: 'Profile',
        navImage: UserIcon,
        navLink: '/app/profile'
    }

]