import {
  FormControl,
  FormLabel,
  Input,
  Icon,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa'

function Screen2() {
  // localStorage key'lerini tanımla
  const facebookKey = 'facebook'
  const instagramKey = 'instagram'
  const twitterKey = 'twitter'
  const youtubeKey = 'youtube'
  const pinterestKey = 'pinterest'
  const whatsAppKey = 'whatsApp'
  const linkedInKey = 'linkedIn'

  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')
  const [youtube, setYoutube] = useState('')
  const [pinterest, setPinterest] = useState('')
  const [whatsApp, setWhatsApp] = useState('')
  const [linkedIn, setLinkedIn] = useState('')

  // Component mount olduğunda localStorage'den verileri al ve state'i güncelle
  useEffect(() => {
    const facebookValue = localStorage.getItem(facebookKey)
    const instagramValue = localStorage.getItem(instagramKey)
    const twitterValue = localStorage.getItem(twitterKey)
    const youtubeValue = localStorage.getItem(youtubeKey)
    const pinterestValue = localStorage.getItem(pinterestKey)
    const whatsAppValue = localStorage.getItem(whatsAppKey)
    const linkedInValue = localStorage.getItem(linkedInKey)

    if (facebookValue) {
      setFacebook(facebookValue)
    }
    if (instagramValue) {
      setInstagram(instagramValue)
    }
    if (twitterValue) {
      setTwitter(twitterValue)
    }
    if (youtubeValue) {
      setYoutube(youtubeValue)
    }
    if (pinterestValue) {
      setPinterest(pinterestValue)
    }
    if (whatsAppValue) {
      setWhatsApp(whatsAppValue)
    }
    if (linkedInValue) {
      setLinkedIn(linkedInValue)
    }
  }, [])

  // Verileri localStorage'e kaydet
  useEffect(() => {
    localStorage.setItem(facebookKey, facebook)
  }, [facebook])

  useEffect(() => {
    localStorage.setItem(instagramKey, instagram)
  }, [instagram])

  useEffect(() => {
    localStorage.setItem(twitterKey, twitter)
  }, [twitter])

  useEffect(() => {
    localStorage.setItem(youtubeKey, youtube)
  }, [youtube])

  useEffect(() => {
    localStorage.setItem(pinterestKey, pinterest)
  }, [pinterest])
  useEffect(() => {
    localStorage.setItem(whatsAppKey, whatsApp)
  }, [whatsApp])
  useEffect(() => {
    localStorage.setItem(linkedInKey, linkedIn)
  }, [linkedIn])
  const Facebook = () => {
    return (
      <>
        <FormControl mb={4}>
          <FormLabel>Facebook Link</FormLabel>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaFacebookF} color="#3b5998" />}
            />
            <Input
              type="text"
              placeholder="https://www.facebook.com/"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </InputGroup>
        </FormControl>
      </>
    )
  }
  const Instagram = () => {
    return (
      <>
        {' '}
        <FormControl mb={4}>
          <FormLabel>İnstagram Link</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={
                <Icon
                  as={FaInstagram}
                  //bgGradient="linear(to-r, #833AB4, #FD1D1D, #F56040)"
                  color="#FD1D1D"
                />
              }
            />
            <Input
              type="text"
              placeholder="https://www.instagram.com/"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </InputGroup>
        </FormControl>
      </>
    )
  }
  const Twitter = () => {
    return (
      <>
        <FormControl mb={4}>
          <FormLabel>Twitter Link</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaTwitter} color="#00acee" />}
            />
            <Input
              type="text"
              placeholder="https://twitter.com/"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
          </InputGroup>
        </FormControl>
      </>
    )
  }
  const Youtube = () => {
    return (
      <>
        <FormControl mb={4}>
          <FormLabel>Youtube Link</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaYoutube} color="#c4302b" />}
            />
            <Input
              type="text"
              placeholder="https://www.youtube.com/"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
            />
          </InputGroup>
        </FormControl>
      </>
    )
  }
  const Pinterest = () => {
    return (
      <>
        {' '}
        <FormControl mb={4}>
          <FormLabel>Pinterest Link</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaPinterestP} color="#BD081C" />}
            />
            <Input
              type="text"
              placeholder="https://tr.pinterest.com/"
              value={pinterest}
              onChange={(e) => setPinterest(e.target.value)}
            />
          </InputGroup>
        </FormControl>
      </>
    )
  }
  const WhatsApp = () => {
    return (
      <>
        <FormControl mb={4}>
          <FormLabel>WhatsApp Link</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaWhatsapp} color="#25D366" />}
            />
            <Input
              type="text"
              placeholder="https://wa.me/"
              value={whatsApp}
              onChange={(e) => setWhatsApp(e.target.value)}
            />
          </InputGroup>
        </FormControl>
      </>
    )
  }
  const Linkedin = () => {
    return (
      <>
        <FormControl mb={4}>
          <FormLabel>Linkedin Link</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaLinkedinIn} color="#0e76a8" />}
            />
            <Input
              type="text"
              placeholder="https://www.linkedin.com/company/{companyName}/"
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
            />
          </InputGroup>
        </FormControl>
      </>
    )
  }
  return (
    <>
      <>
        <Head>
          <title>Kurulum • Sosyal Medya Bilgileri</title>
        </Head>
      </>
      <Text my={4} fontWeight={'semibold'}>
        Sosyal Medya Bilgileri
      </Text>

      <Facebook />
      <Instagram />
      <Twitter />
      <Youtube />
      <Pinterest />
      <WhatsApp />
      <Linkedin />
    </>
  )
}

export default Screen2
