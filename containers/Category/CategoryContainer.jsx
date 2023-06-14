import React, { useState } from 'react'
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react'
import Sidebar from '../../components/CategoryProduct/Sidebar'
import BreadcrumbComponent from '../../components/BreadcrumbComponent'
function CategoryContainer({ category, productData }) {
  const smVariant = { navigation: 'drawer', navigationButton: true }
  const mdVariant = { navigation: 'sidebar', navigationButton: false }
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  return (
    <>
      <>
        {/* 
      {category}

      {productData.map((p) => (
        <div key={p.id}>
          
        </div>
      ))}

      */}
      </>
      <BreadcrumbComponent categoryTitle={category}/>

      <Flex direction={'row'}>
        <Sidebar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
          category={category}
        />

        <Box minWidth="max-content" justifyContent={'space-between'}></Box>
      </Flex>
    </>
  )
}

export default CategoryContainer
