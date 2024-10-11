import {
  MenuList as ChakraMenuList,
  MenuItem as ChakraMenuItem,
  MenuItemProps,
  MenuListProps,
} from '@chakra-ui/react';

/**
 * A custom MenuList component from Chakra MenuList.
 */
export function MenuList({
  children,
  py = [4, 8],
  ...otherProps
}: MenuListProps) {
  return (
    <ChakraMenuList py={py} {...otherProps}>
      {children}
    </ChakraMenuList>
  );
}

/**
 * A custom MenuItem component from Chakra MenuItem.
 */
export function MenuItem({
  children,
  px = [12, 24],
  fontSize = [12, 14],
  ...otherProps
}: MenuItemProps) {
  return (
    <ChakraMenuItem px={px} fontSize={fontSize} {...otherProps}>
      {children}
    </ChakraMenuItem>
  );
}
