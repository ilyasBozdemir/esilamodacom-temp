import { Button, Flex, FormControl, FormLabel, Input,Progress } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsUpload } from 'react-icons/bs'
function LogoUploader({ label }) {
  const [logoPath, setLogoPath] = useState('')
  const [logoPreview, setLogoPreview] = useState('')
  const fileInputRef = React.useRef()

  const handleLogoUpload = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i
    if (!allowedExtensions.exec(file.name)) {
      alert('Sadece .jpg, .jpeg ve .png dosyaları yükleyebilirsiniz.')
      return false
    }
    const reader = new FileReader()
    reader.onload = () => {
      setLogoPath(reader.result)
      setLogoPreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleLogoRemove = () => {
    setLogoPath('')
    setLogoPreview('')
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    handleLogoUpload(e)
  }

  const handleClick = () => {
    fileInputRef.current.click()
  }

  return (
    <FormControl mb={4}>
      <FormLabel>{label}</FormLabel>
      {logoPreview && <img src={logoPreview} alt="Logo Preview" />}
      <Flex mt={2}>
        <Button
          colorScheme={'blue'}
          leftIcon={<BsUpload />}
          mr={2}
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          Yükle
        </Button>
        <Input
          type="file"
          accept=".jpg,.jpeg,.png"
          ref={fileInputRef}
          onChange={handleLogoUpload}
          display="none"
        />
        {logoPreview && (
          <>
            <Button
              colorScheme={'blue'}
              variant="outline"
              onClick={handleLogoRemove}
            >
              Kaldır
            </Button>
          </>
        )}
      </Flex>

    </FormControl>
  )
}

export default LogoUploader
