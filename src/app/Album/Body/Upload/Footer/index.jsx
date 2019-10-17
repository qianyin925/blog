import React from 'react';
import { Button } from 'antd';

import scss from './index.module.scss';
import { useStore } from '../../../store';

const useStateHook = (props, store) => {

  // 取消
  const onCancel = () => {
    store.upload.close();
  };

  // 上传
  const onUpload = () => {
    store.upload.upload();
  }

  return { onCancel, onUpload };
}

export default (props) => {
  const store = useStore();
  const state = useStateHook(props, store);

  return (
    <div className={scss['footer']}>
      <Button type="primary" onClick={state.onUpload}>上传</Button>
      <Button onClick={state.onCancel}>取消</Button>
    </div>
  );
}