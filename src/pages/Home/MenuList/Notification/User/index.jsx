import React from 'react';
import Card from '../Card';
import scss from './index.module.scss';

import { Image, Icon } from 'qyrc';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SERVICE_STATIC_IMAGE_URL } from '@config/consts';

const useStateHook = () => {
  const history = useHistory();

  // 退出
  const signOut = React.useCallback(() => {
    history.push('/login');
  }, []);

  const { avatars, user  } = useSelector(state => ({
    user: _.get(state, 'user'),
    avatars: _.get(state, 'photos.avatar'),
  }));

  // 随机头像
  const avatar = React.useMemo(() => {
    const index = Math.floor(Math.random() * avatars.length);
    return avatars.length > 0
      ? `${SERVICE_STATIC_IMAGE_URL}${avatars[index].name}`
      : '';
  }, [avatars]);

  return { avatar, user, signOut };
};

export default () => {
  const state = useStateHook();
  return (
    <Card className={scss.user}>
      <div className={scss.avatar}>
        <Image src={state.avatar}/>
      </div>
      <div className={scss.name}>
        { state.user.name || '---'}
      </div>
      <div className={scss.motto}>
        { state.user.motto || '这个人很懒什么都没写'}
      </div>
      <Icon
        type="icon-tuichu"
        onClick={state.signOut}
        className={scss['sign-out']}
      />
    </Card>
  );
};
