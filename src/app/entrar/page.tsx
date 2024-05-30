'use client';
import { Input } from '@/components/Input';
import {
   Box,
   Button,
   Flex,
   IconButton,
   Image,
   Text,
   keyframes,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io';

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }`;

export default function LoginPage() {
   return (
      <Box
         bgColor='black'
         bgImage='images/bg-blur.png'
         bgSize='auto 100%'
         bgRepeat='no-repeat'
         h='100vh'>
         <Flex
            w='100%'
            justify='space-around'>
            <Flex
               flexDir='column'
               justify='center'
               w='100%'
               maxW='600px'>
               <Image
                  src='images/logo.svg'
                  w={20}
                  mb='120px'
                  mt='70px'
               />
               <Box>
                  <Input
                     label='Usuário'
                     placeholder='Digite seu usuário'
                     mb='33px'
                  />

                  <Input
                     label='Senha'
                     placeholder='Digite sua senha'
                     mb='10px'
                  />
               </Box>
               <Link href='#'>
                  <Text
                     color='#724EDB'
                     textAlign='right'>
                     Esqueceu a senha?
                  </Text>
               </Link>
               <Button
                  bgGradient='linear(to-r, #631E7B, #724EDB)'
                  color='white'
                  alignSelf='center'
                  mt='49px'
                  w='100%'
                  maxW='390px'
                  h='50px'
                  borderRadius='30px'>
                  Entrar
               </Button>

               <Flex
                  align='center'
                  alignSelf='center'
                  w='100%'
                  gap='25px'
                  mt='72px'>
                  <Box
                     h={0.5}
                     w='100%'
                     maxW={300}
                     bgColor='white'
                  />
                  <Text color='white'>ou</Text>
                  <Box
                     h={0.5}
                     w='100%'
                     maxW={300}
                     bgColor='white'
                  />
               </Flex>

               <Flex
                  alignSelf='center'
                  gap='40px'
                  mt='38px'>
                  <IconButton
                     bgColor='transparent'
                     fontSize={55}
                     _hover={{
                        background: 'none',
                     }}
                     aria-label='Entrar com o Google'
                     icon={<FcGoogle width={65} />}
                  />

                  <IconButton
                     bgColor='transparent'
                     fontSize={55}
                     _hover={{
                        background: 'none',
                     }}
                     aria-label='Entrar com o GitHub'
                     icon={
                        <IoLogoGithub
                           width={65}
                           color='white'
                        />
                     }
                  />
               </Flex>

               <Flex
                  justify='center'
                  mt='40px'>
                  <Text
                     color='white'
                     mr='4px'>
                     Não tem uma conta?{' '}
                  </Text>
                  <Link href='#'>
                     <Text color='#724EDB'>Cadastre-se</Text>
                  </Link>
               </Flex>
            </Flex>
            <Image
               src='images/astronaut.png'
               w={585}
               mt='90px'
               animation={`${float} 5s ease-in-out infinite`}
            />
         </Flex>
      </Box>
   );
}
