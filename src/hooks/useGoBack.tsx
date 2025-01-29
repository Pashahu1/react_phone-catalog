import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

type GoBackCallback = {
  goBack: () => void;
};

export const useGoBack = (): GoBackCallback => {
  const navigation = useNavigate();

  const goBack = useCallback(() => {
    navigation({ pathname: '..' });
  }, [navigation]);

  return { goBack };
};
