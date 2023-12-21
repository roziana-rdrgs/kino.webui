import React from 'react';
import { Container, SideContainer, StyledButton, TextContainer } from './styles';
import image from "./../../../assets/background-login.png";
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import kino from "./../../../assets/kino-descricao.png";
import { IFormSign, ILoginForm } from '../../../types';

export const PageComponent: React.FC<IFormSign> = ({ onSubmit }) => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<ILoginForm>({
        
    });

    return (
        <Container style={{backgroundImage: `url(${kino})`}}>
            <SideContainer style={{backgroundImage: `url(${image})`}}> 
                <TextContainer>
                    tudo sobre a sua franquia de cinemas em um só lugar
                </TextContainer>
            
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ width: 400, padding:25, display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center', alignItems: 'center'}}>
                        <TextField
                            fullWidth
                            label="usuário"
                            placeholder='usuário'
                            size='small'
                            type='text'
                            variant='outlined'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <PersonOutlineIcon></PersonOutlineIcon>
                                    </InputAdornment>
                                )
                            }}
                            {
                                ...register('username', {
                                    validate: (value) => {
                                        if (!value){
                                            return false;
                                        }
                                        return true;
                                    },
                                    required: {
                                        value: true,
                                        message: 'o nome do usuário é obrigatório',
                                        },
                                })
                            }
                        />

                        <span style={{ fontFamily: 'montserrat', color: 'var(--red)', fontWeight: 500 }}>{errors?.username?.message}</span>
                        <br />

                        <TextField
                            fullWidth
                            onError={(a) => console.log(a)}
                            label="senha"
                            placeholder='senha'
                            size='small'
                            type='password'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <VisibilityOffIcon></VisibilityOffIcon>
                                    </InputAdornment>
                                )
                            }}
                            {...register('password', {
                                required: {
                                value: true,
                                message: 'é preciso informar a senha para acessar a plataforma',
                                },
                            })}
                        />
                        <span style={{ fontFamily: 'Montserrat', color: 'var(--red)', fontWeight: 500 }}>{errors?.password?.message}</span>
                        <br />
                        <StyledButton type='submit'>ENTRAR</StyledButton>
                    </div>
                </form>
            </SideContainer>
        </Container>
    
  );
};

export const Login: React.FC = () => {
  return (
      <PageComponent onSubmit={(values) => console.log(values)}/>
  );
};
