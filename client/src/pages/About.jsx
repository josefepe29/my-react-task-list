import React, { useState } from "react";
import { Text, Image, Flex, Box, Button } from "@chakra-ui/react";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Box bg="gray.100" minH="100vh">
      <Text textAlign="center" fontWeight="bold" fontSize="25px">
        About Us
      </Text>
      <Box pt={4} display="flex" justifyContent="space-around" margin="20px">
        <Text maxWidth="400px" display="flex" alignItems="center">
          Our mission is to help people stay organized and productive We believe
          that everyone should have the tools and resources they need to achieve
          their goals
        </Text>
        <Image
          src="https://creativebizservices.org/wp-content/uploads/2018/10/Why-is-team-building-important-in-an-Organization.jpg"
          alt="Equipo de lista de tareas"
          width="400px"
        />
      </Box>
      <Box pt={2}>
        <Flex justifyContent="center">
          <Box>
            <Text>
              Our to-do list is an easy-to-use tool that can help you stay
              organized and focused
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box pt={2}>
        <Flex justifyContent="center">
          <Box>
            <Text>
              Allows you to create to-do lists, add tasks, set reminders and
              more
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box pt={2}>
        <Flex justifyContent="center">
          <Box>
            <Text>
              We are constantly working to improve our list of tasks and add new
              features
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
