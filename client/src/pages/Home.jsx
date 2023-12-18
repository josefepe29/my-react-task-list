import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  OrderedList,
} from "@chakra-ui/react";

import { BsCheckCircle } from "react-icons/bs";

import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Container maxW={"7xl"} marginTop="20px" padding="20px">
        <Stack alignItems="center" direction="row">
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight="600"
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
              >
                Streamline Your Day, One Task at a Time
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              Feeling overwhelmed by your to-do list? Enter ToDo List, your
              ultimate task management solution designed to make your life
              simpler and more organized.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                size="lg"
                fontWeight="bold"
                borderRadius="16px"
                p="10px"
                color="white"
                bg="#275360"
                onClick={() => navigate("/login")}
              >
                Get started
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      <Container
        maxW={"7xl"}
        marginTop="20px"
        padding="20px"
        backgroundColor="#275360"
      >
        <Stack alignItems="center" direction="row">
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://hablemosdeempresas.com/wp-content/uploads/sites/2/2020/03/lista-tareas-portada-1100x732.jpg"
                }
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight="600"
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                color="white"
                position={"relative"}
                _after={{
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
              >
                Key Features
              </Text>
            </Heading>
            <List spacing={3} color="white">
              <ListItem display="flex" gap="8px">
                <ListIcon
                  as={BsCheckCircle}
                  color="white"
                  bgColor="green"
                  gap="4px"
                />
                Intuitive and Seamless: Our user-friendly interface allows you
                to create and manage tasks effortlessly. No steep learning
                curve—just instant productivity.
              </ListItem>
              <ListItem display="flex" gap="8px">
                <ListIcon
                  as={BsCheckCircle}
                  color="white"
                  bgColor="green"
                  gap="4px"
                />
                Customizable Lists: Tailor your task organization to fit your
                unique workflow. Prioritize, label, and categorize tasks for a
                personalized approach to productivity.
              </ListItem>
              <ListItem display="flex" gap="8px">
                <ListIcon
                  as={BsCheckCircle}
                  color="white"
                  bgColor="green"
                  gap="4px"
                />
                Smart Reminders: Say goodbye to forgetting important deadlines.
                Set up customizable reminders to ensure you never miss a beat.
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem display="flex" gap="8px">
                <ListIcon
                  as={BsCheckCircle}
                  color="white"
                  bgColor="green"
                  gap="4px"
                />
                Anytime, Anywhere Access: With our mobile app, your to-do list
                is at your fingertips wherever you go. Stay on top of your day
                with the convenience of mobile task management.
              </ListItem>
            </List>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                size="lg"
                fontWeight="bold"
                borderRadius="16px"
                p="10px"
                color="#275360"
                bg="white"
                onClick={() => navigate("/login")}
              >
                Get started
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Container maxW={"7xl"} marginTop="20px" padding="20px">
        <Stack alignItems="center" direction="row">
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight="600"
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
              >
                How It Works
              </Text>
            </Heading>
            <OrderedList>
              <ListItem>
                <Text fontWeight="bold">Free Sign-Up:</Text> Join ToDo List in
                just a few minutes. Start your journey toward a more organized
                life, no strings attached!
              </ListItem>
              <ListItem>
                <Text fontWeight="bold">Create Your Tasks:</Text> Easily add
                your tasks. Organize them into lists for a clearer, more focused
                approach to your daily responsibilities.
              </ListItem>
              <ListItem>
                <Text fontWeight="bold">Stay on Track:</Text> Set reminders and
                watch your productivity soar. Accomplish more without the
                stress.
              </ListItem>
            </OrderedList>
            <br />
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                size="lg"
                fontWeight="bold"
                borderRadius="16px"
                p="10px"
                color="white"
                bg="#275360"
                onClick={() => navigate("/login")}
              >
                Get started
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://st3.depositphotos.com/1441511/18503/i/1600/depositphotos_185031508-stock-photo-it-office-people-working-at.jpg"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
