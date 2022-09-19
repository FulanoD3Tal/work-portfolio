import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import api from '../../restful/api';

export type ButtonProps = {
  label?: string;
};
/**
 * This is example button
 *
 * TODO: Find if the docs are crashing because using beta package of MUI or
 * is something extra tweet need to make in storybook to load correctly the library
 *
 * @version 1.1.0
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */

const CustomButton = ({ label = 'test' }: ButtonProps) => {
  const [response, setResponse] = useState('');

  const { t } = useTranslation(['common'], { keyPrefix: 'home' });

  useEffect(() => {
    /**
     * Here we show how if our components have to make requests to some api
     * we can safety making in our storybook stories as MSW is already up and running
     */
    api
      .get<{ test: string }>('/test')
      .then(({ data }) => setResponse(data.test));
    return () => {};
  }, []);

  return (
    <Button variant='contained' color='secondary'>
      {t('api-response')}
      {response || label}
    </Button>
  );
};

export default CustomButton;
