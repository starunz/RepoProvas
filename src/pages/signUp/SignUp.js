import {Title, Form, Input, Button, Liink, } from '../../components/styleSignIn&SignUp';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as api from '../../services/api'

import { ThreeDots } from 'react-loader-spinner';
import Swal from 'sweetalert2'

import styled from 'styled-components';

const SignUp = () => {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  }

  async function handleSignUp(e) {
    e.preventDefault();

    setIsLoading(true);

    if (signUpData.password !== signUpData.confirmPassword) {
      setSignUpData({ ...signUpData, password: '', confirmPassword: '' });

      setIsLoading(false);

      Swal.fire({
        imageHeight: 140,
        title: "OOPS...",
        text: 'As senhas não são correspondentes tente de novo, por favor.',
      });

      return;
    } else delete signUpData.confirmPassword;

    try {
      await api.signUp({ ...signUpData });

      setIsLoading(false);
      navigate('/');
    } catch (error) {
      setIsLoading(false);

      if (error.response.status === 409) {
        setSignUpData({ ...signUpData, email: '' })

        Swal.fire({
          imageHeight: 140,
          title: "OOPS...",
          text: 'Este email já está cadastrado.',
        });

        return;
      }

      if (error.response.status === 422) {
        setSignUpData({
          email: '',
          password: '',
          confirmPassword: '',
        });
        
        Swal.fire({
          imageHeight: 140,
          title: "OOPS...",
          text: 'Insira os dados corretamente, por favor.',
        });
        
        return;
      }

      Swal.fire({
        imageHeight: 140,
        title: "OOPS...",
        text: 'Algo deu errado. Será que destruiram nosso servidor?. Tente de novo em alguns instantes.',
      });

      setSignUpData({
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  }

  return(
    <Container>
      
      <Title>RepoProvas</Title>

      <Form onSubmit={handleSignUp}>
        <Input
          type='email'
          placeholder='E-mail'
          name='email'
          onChange={handleChange}
          value={signUpData.email}
          disabled={isLoading}
          required
        />
        <Input
          type='password'
          placeholder='Senha'
          name='password'
          onChange={handleChange}
          value={signUpData.password}
          disabled={isLoading}
          required
        />
        <Input
          type='password'
          placeholder='Confirme a senha'
          name='confirmPassword'
          onChange={handleChange}
          value={signUpData.confirmPassword}
          disabled={isLoading}
          required
        />

        <Button type='submit' disabled={isLoading}>
          {isLoading ? (
            <ThreeDots color="#FFFFFF" height={50} width={50} />
          ) : (
            'Cadastrar'
          )}
        </Button>
      </Form>

      <Liink to='/'>Já tem uma conta? Entre agora!</Liink>
    </Container>
  );
}

export default SignUp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: calc((100vh - 515px) / 2) auto;

  background-color: #1C1C1C;

  opacity: 0.9;
`;