import { Box, Text, Input as InputUI, BoxProps } from '@chakra-ui/react';

type InputProps = BoxProps & {
   label?: string;
   placeholder?: string;
   value?: string;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
   type?: 'text' | 'password' | 'email' | 'tel';
   name?: string;
};
export function Input({
   label,
   placeholder,
   value,
   onChange,
   type,
   name,
   ...rest
}: InputProps) {
   return (
      <Box {...rest}>
         {label && (
            <Text
               color='white'
               mb='8px'>
               {label}
            </Text>
         )}
         <InputUI
            bgColor={'white'}
            h='50px'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            name={name}
         />
      </Box>
   );
}
