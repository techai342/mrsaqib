import { GalleryItem, SocialLink, Skill } from './types';

export const PROFILE_IMAGE = "https://ik.imagekit.io/shaban/SHABAN-1768573425069_nIPVZQOaT.jpg";
export const QR_IMAGE = "https://ik.imagekit.io/shaban/SHABAN-1768641939011_sxZP_7Yfs.jpg";

export const SOCIALS: SocialLink[] = [
  { name: 'WhatsApp', url: 'https://wa.me/923478936242', icon: 'message-circle', color: 'text-green-500 hover:bg-green-500/10' },
  { name: 'Instagram', url: 'https://www.instagram.com/mr_saqib242', icon: 'instagram', color: 'text-pink-500 hover:bg-pink-500/10' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@mr_saqib_242', icon: 'music-2', color: 'text-cyan-400 hover:bg-cyan-400/10' },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100085188689033', icon: 'facebook', color: 'text-blue-600 hover:bg-blue-600/10' },
  { name: 'Snapchat', url: 'https://www.snapchat.com/add/mrsaqib242', icon: 'ghost', color: 'text-yellow-400 hover:bg-yellow-400/10' },
];

export const SKILLS: Skill[] = [
  { name: 'AI Enthusiast', icon: 'brain-circuit' },
  { name: 'Web Dev', icon: 'code-2' },
  { name: 'Video Editor', icon: 'video' },
  { name: 'Designer', icon: 'palette' },
  { name: 'Marketing', icon: 'trending-up' },
  { name: 'Creative', icon: 'lightbulb' },
];

// Extracted from provided HTML
export const GALLERY_IMAGES: GalleryItem[] = [
    "https://ik.imagekit.io/shaban/SHABAN-1768573425069_nIPVZQOaT.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768573550507_ArSSmUT0tW.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768573642529_UEEpMXFEkV.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768573647809_L4RIsxMgI.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768573652854__LqIeAU47.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768573659591_abaSpAF-y.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768573669146_5z2ap9EbK.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768573674849_RvEzQQfNI.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768573679202_aZrkl8hRt.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768573689483_NnwuSUKqm.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768573697274_CP3034fDP.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768573705488_jYpVaM2u0.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575063823_VKv0h9E-k.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575091370_Eff9-yBbl.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575128883_e-W-AMj3q.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575146572_S9cSoOYEd.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575153097_cNAjcwYjl.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575206893_2JJlY1Wm0.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575218262_6SqMS7ijo.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575233008_FM9BCgwYX.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575235727_gOIsiMEMW.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575240340_5tz9dWXNo.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575245369_aFwAR5G1A.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575256985_nCso21_yg.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575261320_xDKXsGy9j.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575265565_APidCqJd2.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575273776_12t6fSWUNF.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575281292_KWCWQm1tp.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575289386_Ohy6x5nR7.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575387302_iPzMxeVnf.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575391677_bsAlvqZL9.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575400809_AMhNzr8n3.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575407874_LewPrAdHC.jpg",
    "https://ik.imagekit.io/shaban/SHABAN-1768575415857_lNqkpn9Iz.jpg"
].map((url, index) => ({ id: index, url }));