import React from 'react';
import { SiTiktok, SiHashnode } from 'react-icons/si';
import {
  Text,
  Flex,
  Link,
  Box,
  Icon,
  // useColorModeValue,
} from '@chakra-ui/react';
import {
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiGithubFill,
  RiInstagramFill,
  RiNpmjsFill,
} from 'react-icons/ri';
import db from '../../db.json';

function AboutUser() {
  return (
    <Box width={{ base: '95%', sm: '80%' }}>
      <Text
        fontSize={{ base: '1.1rem', sm: '1.5rem', md: '1.5rem', lg: '1.5rem' }}
        textAlign="justify"
        margin="0 0 25px 0"
      >
        {db.aboutme}
      </Text>

      <Flex justifyContent="space-between">
        <Link href={db['link-social'].linkedin} isExternal ml="-2px" mr="2px">
          <Icon boxSize={{ base: '9', md: '12' }} as={RiLinkedinBoxFill}></Icon>
        </Link>

        <Link href={db['link-social'].twitter} isExternal mr="2px">
          <Icon boxSize={{ base: '9', md: '12' }} as={RiTwitterFill}></Icon>
        </Link>

        <Link href={db['link-social'].instagram} isExternal mr="2px">
          <Icon boxSize={{ base: '9', md: '12' }} as={RiInstagramFill}></Icon>
        </Link>

        <Link href={db['link-social'].tiktok} isExternal mr="2px">
          <Icon boxSize={{ base: '9', md: '12' }} as={SiTiktok}></Icon>
        </Link>

        <Link href={db['link-social'].blog} isExternal mr="2px">
          <Icon boxSize={{ base: '9', md: '12' }} as={SiHashnode}></Icon>
        </Link>
        <Link href={db['link-social'].github} isExternal mr="2px">
          <Icon boxSize={{ base: '9', md: '12' }} as={RiGithubFill}></Icon>
        </Link>

        <Link href={db['link-social'].npm} isExternal mr="2px">
          <Icon boxSize={{ base: '9', md: '12' }} as={RiNpmjsFill}></Icon>
        </Link>
      </Flex>
    </Box>
  );
}

export default AboutUser;
