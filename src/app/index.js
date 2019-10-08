import Tag from './Tag';
import Note from './Note';
import Album from './Album';
import Article from './Article';

export default [
  {
    name: '相册',
    code: 'album',
    path: '/album',
    component: Album,
    defaultOpen: true,
    defaultUrl: '/album',
    icon: 'icon-banjixiangce',
    modalProps: {
      dragHeight: 40,
      toolPosition: {top: 15, left: 15},
      defaultParams: { width: 1000, height: 530, offsetX: 50, offsetY: 50 },
    },
  },
  {
    name: '文章',
    icon: 'icon-wenzhang',
    code: 'article',
    defaultOpen: false,
    path: '/article',
    defaultUrl: '/article',
    component: Article,
    modalProps: {
      dragHeight: 40,
      toolPosition: {top: 5, left: 5},
      toolClassName: 'article-modal-tool',
      defaultParams: { width: 1220, height: 630, offsetX: 50, offsetY: 50 },
    },
  },
  {
    name: '笔记',
    code: 'note',
    path: '/note',
    component: Note,
    icon: 'icon-jilu',
    defaultOpen: false,
    defaultUrl: '/note',
    modalProps: {
      dragHeight: 40,
      toolPosition: {top: 15, left: 5},
      defaultParams: { width: 980, height: 500, offsetX: 50, offsetY: 50 },
    },
  },
  // {
  //   name: '标签',
  //   icon: 'icon-biaoqian1',
  //   code: 'tag',
  //   path: '/tag',
  //   defaultUrl: '/tag',
  //   component: Tag
  // },
];
