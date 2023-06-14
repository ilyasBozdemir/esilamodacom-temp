import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import Categories from './Filter/Categories'
import PriceRange from './Filter/PriceRange'
import EvaluationScore from './Filter/EvaluationScore'
import BodySize from './Filter/BodySize'
import Colors from './Filter/Colors'
import CouponProduct from './Filter/CouponProduct'
import DiscountedProduct from './Filter/DiscountedProduct'
import DiscountInCart from './Filter/DiscountedProduct'
import CategoryCollapse from './CategoryCollapse'

const SidebarContent = (props) => {
  const { onClick, ...rest } = props

  const filters = [
    {
      title: 'Kategoriler',
      component: <Categories currentCategory={props.category} />,
      isCollapsed: true,
    },
    { title: 'Fiyat Aralığı', component: <PriceRange />, isCollapsed: true },
    {
      title: 'Değerlendirme Puanı',
      component: <EvaluationScore />,
      isCollapsed: true,
    },
    { title: 'Beden', component: <BodySize />, isCollapsed: true },
    { title: 'Renk', component: <Colors />, isCollapsed: true },
    {
      title: 'Kupon Ürünleri',
      component: <CouponProduct />,
      isCollapsed: false,
    },
    {
      title: 'İndirimli Ürünler',
      component: <DiscountedProduct />,
      isCollapsed: false,
    },
    {
      title: 'Sepette İndirim',
      component: <DiscountInCart />,
      isCollapsed: false,
    },
  ]

  return (
    <>
      <Box {...rest}>
        <VStack userSelect={'none'}>
          {filters.map((filter, index) => (
            <CategoryCollapse
              key={index}
              categoryTitle={filter.title}
              isCollapsed={filter.isCollapsed}
              isCollapsedOpen={index !== 0}
            >
              {filter.component}
            </CategoryCollapse>
          ))}
        </VStack>
      </Box>
    </>
  )
}

const Sidebar = ({ isOpen, variant, category, onClose }) => {
  return variant === 'sidebar' ? (
    <Box
      position="relative"
      overflow={'auto'}
      w="200px"
      minW={'200px'}
      h={'container.md'}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#444',
          borderRadius: '12px',
        },
      }}
    >
      <SidebarContent onClick={onClose} category={category} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="bottom" size={'sm'} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontSize={'xl'}>Filtrele</Text>
          </DrawerHeader>

          <DrawerBody>
            <SidebarContent onClick={onClose} category={category} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default Sidebar
