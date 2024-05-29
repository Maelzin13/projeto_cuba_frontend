import { Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
   return (
      <Link href='/entrar'>
         <Button>Login</Button>
      </Link>
   );
}
