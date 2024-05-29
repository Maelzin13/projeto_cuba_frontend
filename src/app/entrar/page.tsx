import { Input } from '@/components/Input';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function LoginPage() {
   return (
      <Box
         bgColor='black'
         bgImage='images/bg-blur.png'
         bgSize='auto 100%'
         bgRepeat='no-repeat'
         h='100vh'>
         <Image
            src='images/logo.png'
            w={140}
         />
         <Flex
            flexDir='column'
            w='100%'
            maxW={450}>
            <Box>
               <Input
                  label='Usuário'
                  placeholder='Digite seu usuário'
               />
               <Input
                  label='Senha'
                  placeholder='Digite sua senha'
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
               w='100%'
               maxW={250}>
               Entrar
            </Button>
         </Flex>
         <Flex></Flex>
      </Box>
   );
}
