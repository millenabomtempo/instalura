/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = useState({
    usuario: '',
    nome: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.usuario.length === 0 || userInfo.nome.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmited(true);

        // Data Transfer Object
        const userDTO = {
          username: userInfo.usuario,
          name: userInfo.nome,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora :(');
          })
          .then((respostaConvertidaEmObjeto) => {
            setSubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(respostaConvertidaEmObjeto);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }}
    >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
          {/* https://lottiefiles.com/11204-success */}
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
          {/* https://lottiefiles.com/14331-error */}
        </Box>
      )}
    </form>
  );
}

export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormCadastro.defaultProps = {
  propsDoModal: PropTypes.shape({}),
};

FormCadastro.propTypes = {
  propsDoModal: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
    PropTypes.func]),
};
