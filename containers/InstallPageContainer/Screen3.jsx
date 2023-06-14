import {
  Text,
  FormControl,
  FormLabel,
  Select,
  Button,
  Input,
  Divider,
  InputGroup,
  Stack,
  InputRightElement,
  RadioGroup,
  Radio,
  Icon,
} from "@chakra-ui/react";

import Head from "next/head";
import React, { useState } from "react";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";

function Screen3() {
  const [database, setDatabase] = useState("");

  const [connectionString, setConnectionString] = useState("");
  const [url, setUrl] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const Eye = () => {
    return (
      <>
        <Icon as={HiOutlineEye} />
      </>
    );
  };
  const EyeOff = () => {
    return (
      <>
        <Icon as={HiOutlineEyeOff} />
      </>
    );
  };

  const handleConnectionStringChange = (event) => {
    setConnectionString(event.target.value);
  };
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSelect = (event) => {
    setDatabase(event.target.value);
    localStorage.setItem("database", database);
  };

  const NameInput = () => {
    return (
      <>
        <FormControl mb={4}>
          <FormLabel>Ad :</FormLabel>

          <InputGroup>
            <Input type="text" />
          </InputGroup>
        </FormControl>
      </>
    );
  };
  const SurnameInput = () => {
    return (
      <>
        <FormControl mb={4}>
          <FormLabel>Soyad :</FormLabel>

          <InputGroup>
            <Input type="text" />
          </InputGroup>
        </FormControl>
      </>
    );
  };

  const MailInput = () => {
    return (
      <>
        <FormControl mb={4}>
          <FormLabel>Mail :</FormLabel>

          <InputGroup>
            <Input type="email" />
          </InputGroup>
        </FormControl>
      </>
    );
  };

  const PasswordInput = () => {
    const [show, setShow] = React.useState(false);
    const [show2, setShow2] = React.useState(false);

    const [psw, setPsw] = React.useState("");
    const [psw2, setPsw2] = React.useState("");

    const handleOnChange = (e) => {
      setPsw(e.target.value);
    };

    const handleOnChange2 = (e) => {
      setPsw2(e.target.value);

      if (psw === e.target.value) {
        setPassword(psw);
      } else {
        setPassword("");
      }
    };

    const handleClick = () => setShow(!show);
    const handleClick2 = () => setShow2(!show2);
    return (
      <>
        <FormControl mb={4}>
          <FormLabel>Şifre :</FormLabel>
          <InputGroup size="md">
            <Input
              type={show ? "text" : "password"}
              value={psw}
              onChange={handleOnChange}
              placeholder="şifreyi  girin."
              borderColor={
                psw && psw === psw2 ? "green.300" : psw ? "red.300" : ""
              }
              isInvalid={psw !== psw2}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                variant={"ghost"}
              >
                {show ? <EyeOff /> : <Eye />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Şifre Tekrar :</FormLabel>
          <InputGroup size="md">
            <Input
              type={show2 ? "text" : "password"}
              value={psw2}
              onChange={handleOnChange2}
              placeholder="şifreyi tekrar girin."
              borderColor={
                psw2 && psw === psw2 ? "green.300" : psw2 ? "red.300" : ""
              }
              isInvalid={psw !== psw2}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick2}
                variant={"ghost"}
              >
                {show2 ? <EyeOff /> : <Eye />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </>
    );
  };

  const GenderInput = () => {
    const [value, setValue] = React.useState("");
    return (
      <>
        <FormControl mb={4}>
          <FormLabel>Cinsiyet :</FormLabel>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio value="kadin">Kadın</Radio>
              <Radio value="erkek">Erkek</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </>
    );
  };

  return (
    <>
      <>
        <Head>
          <title>Kurulum • Yapılandırma</title>
        </Head>
      </>
      <>
        <Text my={4} fontWeight={"semibold"}>
          Veritabanı Yapılandırması
        </Text>

        <FormControl>
          <FormLabel htmlFor="database">Veritabanı Seçimi</FormLabel>
          <Select id="database" value={database} onChange={handleSelect}>
            <option value="">Lütfen bir veritabanı seçin</option>
            <option value="postgresql">PostgreSQL</option>
            <option value="mysql">MySQL</option>
            <option value="mongodb">MongoDB</option>
          </Select>
        </FormControl>

        {database === "postgresql" && (
          <FormControl mt={4}>
            <FormLabel htmlFor="connection-string">
              PostgreSQL Bağlantı Dizesi :
            </FormLabel>
            <Input
              type="text"
              id="connection-string"
              value={connectionString}
              onChange={handleConnectionStringChange}
              placeholder='Örn: "Provider=PostgreSQL OLE DB Provider;Data Source=myServerAddress;location=myDataBase;User ID=myUsername;password=myPassword;"'
            />
          </FormControl>
        )}
        {database === "mysql" && (
          <FormControl mt={4}>
            <FormLabel htmlFor="connection-string">
              Mysql Bağlantı Dizesi :
            </FormLabel>
            <Input
              type="text"
              id="connection-string"
              value={connectionString}
              onChange={handleConnectionStringChange}
              placeholder='Örn: "Server=myServerAddress;Database=myDataBase;Uid=myUsername;Pwd=myPassword;"'
            />
          </FormControl>
        )}
        {database === "mongodb" && (
          <FormControl mt={4}>
            <FormLabel htmlFor="connection-string">Url :</FormLabel>
            <Input
              type="text"
              id="connection-string"
              value={url}
              onChange={handleUrlChange}
              placeholder="Örn: 'mongodb://<username>:<password>@<host>:<port>/<DB-name>'"
            />
          </FormControl>
        )}
        <Divider />
        <Text my={4} fontWeight={"semibold"}>
          Admin Kullanıcı Bilgileri tanımlayın
        </Text>

        <Stack direction={"row"}>
          <NameInput />
          <SurnameInput />
        </Stack>
        <GenderInput />
        <MailInput />
        <PasswordInput />
      </>
    </>
  );
}

export default Screen3;
